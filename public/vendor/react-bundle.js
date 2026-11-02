/**
 * SLP Plastering - Standalone React & VDOM Runtime
 * Zero external dependencies. Full browser and offline compatibility.
 * Provides: React.useState, React.useEffect, React.useMemo, React.useCallback,
 * React.useRef, React.createElement, ReactDOM.createRoot, and global `html` tagged template helper.
 */
(function(global) {
  'use strict';

  // --- VDOM Node Type ---
  function VNode(type, props, children, key) {
    this.type = type;
    this.props = props || {};
    this.children = children || [];
    this.key = key != null ? key : (props && props.key != null ? props.key : null);
  }

  function createElement(type, config) {
    var props = {};
    var children = [];
    var key = null;

    if (config) {
      for (var k in config) {
        if (k === 'key') key = config[k];
        else props[k] = config[k];
      }
    }

    for (var i = 2; i < arguments.length; i++) {
      var child = arguments[i];
      if (Array.isArray(child)) {
        for (var j = 0; j < child.length; j++) {
          if (child[j] != null && child[j] !== false && child[j] !== true) {
            children.push(typeof child[j] === 'object' ? child[j] : String(child[j]));
          }
        }
      } else if (child != null && child !== false && child !== true) {
        children.push(typeof child === 'object' ? child : String(child));
      }
    }

    props.children = children;
    return new VNode(type, props, children, key);
  }

  // --- Tagged Template Helper `html` (Lightweight declarative parser) ---
  function parseHtml(statics) {
    var substs = Array.prototype.slice.call(arguments, 1);
    var raw = '';
    var placeholders = [];

    for (var i = 0; i < statics.length; i++) {
      raw += statics[i];
      if (i < substs.length) {
        var ph = '__SLP_PH_' + i + '__';
        raw += ph;
        placeholders[i] = substs[i];
      }
    }

    var root = { type: 'root', children: [] };
    var stack = [root];
    var tagRegex = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z0-9_\-]+)((?:\s+[a-zA-Z0-9_\-:@.]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*)\s*(\/?)>/g;
    var lastIndex = 0;
    var match;

    function processText(text) {
      if (!text) return;
      if (stack.length === 1 && !text.trim()) return;
      var parts = text.split(/(__SLP_PH_\d+__)/);
      for (var p = 0; p < parts.length; p++) {
        var part = parts[p];
        if (!part) continue;
        var phMatch = part.match(/^__SLP_PH_(\d+)__$/);
        if (phMatch) {
          var val = placeholders[Number(phMatch[1])];
          stack[stack.length - 1].children.push(val);
        } else {
          stack[stack.length - 1].children.push(part);
        }
      }
    }

    while ((match = tagRegex.exec(raw)) !== null) {
      var textBefore = raw.slice(lastIndex, match.index);
      processText(textBefore);
      lastIndex = tagRegex.lastIndex;

      if (match[0].startsWith('<!--')) continue;

      var isClose = Boolean(match[1]);
      var rawTagName = match[2];
      var attrString = match[3];

      var phTagMatch = rawTagName.match(/^__SLP_PH_(\d+)__$/);
      var tagType = phTagMatch ? placeholders[Number(phTagMatch[1])] : rawTagName;
      var isSelfClosing = Boolean(match[4]) || (typeof tagType === 'string' && /^(img|input|br|hr|meta|link)$/i.test(tagType));

      if (isClose) {
        if (stack.length > 1) {
          stack.pop();
        }
      } else {
        var props = {};
        if (attrString) {
          var attrRegex = /([a-zA-Z0-9_\-:@.]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
          var aMatch;
          while ((aMatch = attrRegex.exec(attrString)) !== null) {
            var aName = aMatch[1];
            var aVal = aMatch[2] !== undefined ? aMatch[2] : (aMatch[3] !== undefined ? aMatch[3] : (aMatch[4] !== undefined ? aMatch[4] : true));

            if (typeof aVal === 'string') {
              var phM = aVal.match(/^__SLP_PH_(\d+)__$/);
              if (phM) {
                aVal = placeholders[Number(phM[1])];
              } else if (aVal.includes('__SLP_PH_')) {
                aVal = aVal.replace(/__SLP_PH_(\d+)__/g, function(_, idx) {
                  return placeholders[Number(idx)];
                });
              }
            }

            if (aName === 'class') aName = 'className';
            else if (aName === 'for') aName = 'htmlFor';
            props[aName] = aVal;
          }
        }

        var node = { type: tagType, props: props, children: [] };
        stack[stack.length - 1].children.push(node);

        if (!isSelfClosing) {
          stack.push(node);
        }
      }
    }

    processText(raw.slice(lastIndex));

    function toVNode(n) {
      if (n == null || n === false || n === true) return null;
      if (typeof n !== 'object' || n instanceof VNode) return n;
      if (Array.isArray(n)) {
        return n.map(toVNode).filter(function(x) { return x != null; });
      }
      var ch = (n.children || []).map(toVNode).filter(function(x) { return x != null; });
      var flat = [];
      for (var k = 0; k < ch.length; k++) {
        if (Array.isArray(ch[k])) flat.push.apply(flat, ch[k]);
        else flat.push(ch[k]);
      }
      return createElement(n.type, n.props, flat);
    }

    var validRoots = root.children.filter(function(c) {
      return c != null && (typeof c !== 'string' || c.trim().length > 0);
    });

    if (validRoots.length === 1) {
      return toVNode(validRoots[0]);
    }
    return toVNode(validRoots);
  }

  // --- Hooks & Component Engine ---
  var currentInstance = null;
  var currentHookIndex = 0;

  function useState(initial) {
    if (!currentInstance) throw new Error('useState must be called inside a component');
    var inst = currentInstance;
    var idx = currentHookIndex++;
    if (inst.hooks[idx] === undefined) {
      inst.hooks[idx] = typeof initial === 'function' ? initial() : initial;
    }
    var setState = function(newVal) {
      var next = typeof newVal === 'function' ? newVal(inst.hooks[idx]) : newVal;
      if (next !== inst.hooks[idx]) {
        inst.hooks[idx] = next;
        inst.triggerUpdate();
      }
    };
    return [inst.hooks[idx], setState];
  }

  function useEffect(effect, deps) {
    if (!currentInstance) throw new Error('useEffect must be called inside a component');
    var inst = currentInstance;
    var idx = currentHookIndex++;
    var prev = inst.hooks[idx];
    var hasChanged = true;
    if (prev && deps) {
      hasChanged = deps.some(function(d, i) { return d !== prev.deps[i]; });
    }
    if (hasChanged) {
      inst.pendingEffects.push({ effect: effect, prevCleanup: prev && prev.cleanup, idx: idx, deps: deps });
    }
  }

  function useMemo(factory, deps) {
    if (!currentInstance) throw new Error('useMemo must be called inside a component');
    var inst = currentInstance;
    var idx = currentHookIndex++;
    var prev = inst.hooks[idx];
    if (prev && deps) {
      var changed = deps.some(function(d, i) { return d !== prev.deps[i]; });
      if (!changed) return prev.value;
    }
    var val = factory();
    inst.hooks[idx] = { value: val, deps: deps };
    return val;
  }

  function useCallback(callback, deps) {
    return useMemo(function() { return callback; }, deps);
  }

  function useRef(initial) {
    return useMemo(function() { return { current: initial }; }, []);
  }

  // --- Component Instance ---
  function ComponentInstance(type, props, parentDom) {
    this.type = type;
    this.props = props || {};
    this.parentDom = parentDom;
    this.hooks = [];
    this.pendingEffects = [];
    this.activeEffects = [];
    this.dom = null;
    this.vnode = null;
    this.updatePending = false;
  }

  ComponentInstance.prototype.render = function() {
    var prevInstance = currentInstance;
    var prevIndex = currentHookIndex;
    currentInstance = this;
    currentHookIndex = 0;
    this.pendingEffects = [];

    var rendered;
    try {
      rendered = this.type(this.props);
    } finally {
      currentInstance = prevInstance;
      currentHookIndex = prevIndex;
    }

    return rendered;
  };

  ComponentInstance.prototype.triggerUpdate = function() {
    var self = this;
    if (self.updatePending) return;
    self.updatePending = true;
    var queueFn = typeof queueMicrotask === 'function' ? queueMicrotask : function(cb) { setTimeout(cb, 0); };
    queueFn(function() {
      self.updatePending = false;
      self.update();
    });
  };

  ComponentInstance.prototype.update = function() {
    var newVNode = this.render();
    this.dom = reconcile(this.parentDom, this.dom, this.vnode, newVNode);
    this.vnode = newVNode;
    this.runEffects();
  };

  ComponentInstance.prototype.runEffects = function() {
    for (var i = 0; i < this.pendingEffects.length; i++) {
      var pe = this.pendingEffects[i];
      if (typeof pe.prevCleanup === 'function') {
        try { pe.prevCleanup(); } catch(e) { console.error('Error in effect cleanup:', e); }
      }
      var cleanup = pe.effect();
      this.hooks[pe.idx] = { cleanup: cleanup, deps: pe.deps };
    }
    this.pendingEffects = [];
  };

  ComponentInstance.prototype.unmount = function() {
    for (var i = 0; i < this.hooks.length; i++) {
      var h = this.hooks[i];
      if (h && typeof h.cleanup === 'function') {
        try { h.cleanup(); } catch(e) { console.error('Error during cleanup:', e); }
      }
    }
  };

  // --- DOM Diffing & Reconciler ---
  var SVG_TAGS = /^(svg|path|circle|rect|line|polyline|polygon|g|defs|text|use)$/i;

  function setProp(dom, name, val, prevVal) {
    if (name === 'children' || name === 'key') return;

    if (name.startsWith('on') && typeof val === 'function') {
      var eventName = name.slice(2).toLowerCase();
      if (dom._slpHandlers && dom._slpHandlers[eventName]) {
        dom.removeEventListener(eventName, dom._slpHandlers[eventName]);
      }
      if (!dom._slpHandlers) dom._slpHandlers = {};
      dom._slpHandlers[eventName] = val;
      dom.addEventListener(eventName, val);
    } else if (name === 'className' || name === 'class') {
      if (dom.setAttribute) {
        dom.setAttribute('class', val || '');
      } else {
        dom.className = val || '';
      }
    } else if (name === 'style') {
      if (typeof val === 'string') {
        dom.style.cssText = val;
      } else if (typeof val === 'object' && val) {
        Object.assign(dom.style, val);
      } else {
        dom.removeAttribute('style');
      }
    } else if (name === 'dangerouslySetInnerHTML') {
      if (val && val.__html != null) {
        dom.innerHTML = val.__html;
      }
    } else if (typeof val === 'boolean') {
      if (val) dom.setAttribute(name, '');
      else dom.removeAttribute(name);
      if (name in dom) {
        try { dom[name] = val; } catch(e){}
      }
    } else if (val != null) {
      dom.setAttribute(name, String(val));
      if (name === 'value' && 'value' in dom) {
        dom.value = val;
      }
    } else {
      dom.removeAttribute(name);
    }
  }

  function createDom(vnode, parentDom, isSvg) {
    if (vnode == null || vnode === false || vnode === true) {
      return document.createTextNode('');
    }

    if (Array.isArray(vnode)) {
      var frag = document.createDocumentFragment ? document.createDocumentFragment() : document.createElement('div');
      for (var i = 0; i < vnode.length; i++) {
        var cDom = createDom(vnode[i], parentDom, isSvg);
        if (cDom) frag.appendChild(cDom);
      }
      return frag;
    }

    if (typeof vnode === 'string' || typeof vnode === 'number') {
      return document.createTextNode(String(vnode));
    }

    if (typeof vnode.type === 'function') {
      var inst = new ComponentInstance(vnode.type, vnode.props, parentDom);
      var childVNode = inst.render();
      inst.vnode = childVNode;
      var dom = createDom(childVNode, parentDom, isSvg);
      inst.dom = dom;
      dom._slpInstance = inst;
      inst.runEffects();
      return dom;
    }

    if (!vnode.type) {
      return document.createTextNode('');
    }

    var inSvg = isSvg || SVG_TAGS.test(vnode.type);
    var dom = inSvg && document.createElementNS
      ? document.createElementNS('http://www.w3.org/2000/svg', vnode.type)
      : document.createElement(vnode.type);

    dom._slpVNode = vnode;

    if (vnode.props) {
      for (var p in vnode.props) {
        setProp(dom, p, vnode.props[p], null);
      }
    }

    var ch = vnode.children || [];
    for (var j = 0; j < ch.length; j++) {
      var childDom = createDom(ch[j], dom, inSvg);
      if (childDom) dom.appendChild(childDom);
    }

    return dom;
  }

  function reconcile(parentDom, dom, oldVNode, newVNode) {
    if (oldVNode === newVNode) return dom;

    if (!oldVNode) {
      var newDom = createDom(newVNode, parentDom);
      if (parentDom) parentDom.appendChild(newDom);
      return newDom;
    }

    if (!newVNode) {
      if (dom && dom._slpInstance) dom._slpInstance.unmount();
      if (dom && dom.parentNode) dom.parentNode.removeChild(dom);
      return null;
    }

    // Primitive text nodes
    if (typeof oldVNode === 'string' || typeof oldVNode === 'number' ||
        typeof newVNode === 'string' || typeof newVNode === 'number') {
      if (String(oldVNode) !== String(newVNode)) {
        var replacement = createDom(newVNode, parentDom);
        if (dom && dom.parentNode) dom.parentNode.replaceChild(replacement, dom);
        return replacement;
      }
      return dom;
    }

    // Component nodes
    if (typeof newVNode.type === 'function') {
      if (dom && dom._slpInstance && dom._slpInstance.type === newVNode.type) {
        dom._slpInstance.props = newVNode.props;
        dom._slpInstance.update();
        return dom._slpInstance.dom;
      }
      var cDom = createDom(newVNode, parentDom);
      if (dom && dom.parentNode) dom.parentNode.replaceChild(cDom, dom);
      return cDom;
    }

    // Different HTML tag types
    if (oldVNode.type !== newVNode.type) {
      var freshDom = createDom(newVNode, parentDom);
      if (dom && dom.parentNode) dom.parentNode.replaceChild(freshDom, dom);
      return freshDom;
    }

    // Same HTML tag: update attributes
    var oldProps = oldVNode.props || {};
    var newProps = newVNode.props || {};

    for (var np in newProps) {
      if (newProps[np] !== oldProps[np]) {
        setProp(dom, np, newProps[np], oldProps[np]);
      }
    }
    for (var op in oldProps) {
      if (!(op in newProps)) {
        setProp(dom, op, null, oldProps[op]);
      }
    }

    // Children diffing
    var oldCh = oldVNode.children || [];
    var newCh = newVNode.children || [];
    var maxLen = Math.max(oldCh.length, newCh.length);
    var childNodes = Array.from(dom.childNodes || []);

    for (var c = 0; c < maxLen; c++) {
      var childNode = childNodes[c];
      var oldChild = oldCh[c];
      var newChild = newCh[c];

      if (newChild && !oldChild) {
        var added = createDom(newChild, dom, SVG_TAGS.test(dom.tagName));
        dom.appendChild(added);
      } else if (!newChild && oldChild) {
        if (childNode) {
          if (childNode._slpInstance) childNode._slpInstance.unmount();
          dom.removeChild(childNode);
        }
      } else if (newChild && oldChild) {
        reconcile(dom, childNode, oldChild, newChild);
      }
    }

    dom._slpVNode = newVNode;
    return dom;
  }

  // --- Root Mount ---
  function createRoot(container) {
    var currentVNode = null;
    var rootDom = null;

    return {
      render: function(vnode) {
        if (!rootDom) {
          container.innerHTML = '';
          rootDom = createDom(vnode, container);
          if (rootDom) container.appendChild(rootDom);
          currentVNode = vnode;
        } else {
          rootDom = reconcile(container, rootDom, currentVNode, vnode);
          currentVNode = vnode;
        }
      },
      unmount: function() {
        if (rootDom && rootDom._slpInstance) {
          rootDom._slpInstance.unmount();
        }
        container.innerHTML = '';
        rootDom = null;
        currentVNode = null;
      }
    };
  }

  // Expose to window / global
  var React = {
    createElement: createElement,
    useState: useState,
    useEffect: useEffect,
    useMemo: useMemo,
    useCallback: useCallback,
    useRef: useRef,
    version: '18.3.1 (SLP-Runtime)'
  };

  var ReactDOM = {
    createRoot: createRoot
  };

  global.React = React;
  global.ReactDOM = ReactDOM;
  global.html = parseHtml;

})(typeof window !== 'undefined' ? window : globalThis);
