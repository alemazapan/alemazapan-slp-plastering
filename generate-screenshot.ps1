[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
Add-Type -AssemblyName System.Drawing

$width = 1440
$height = 4900
$bmp = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Official Palette
$colBlack = [System.Drawing.ColorTranslator]::FromHtml('#202020')
$colDarkPure = [System.Drawing.ColorTranslator]::FromHtml('#161616')
$colDarkSurface = [System.Drawing.ColorTranslator]::FromHtml('#262626')
$colBeige = [System.Drawing.ColorTranslator]::FromHtml('#EDE7D8')
$colBeigeLight = [System.Drawing.ColorTranslator]::FromHtml('#F7F5EF')
$colOrange = [System.Drawing.ColorTranslator]::FromHtml('#B94F28')
$colOrangeHover = [System.Drawing.ColorTranslator]::FromHtml('#9E3E1A')
$colWhite = [System.Drawing.ColorTranslator]::FromHtml('#FFFFFF')
$colGray = [System.Drawing.ColorTranslator]::FromHtml('#777777')
$colGrayDark = [System.Drawing.ColorTranslator]::FromHtml('#4A4A4A')
$colBorder = [System.Drawing.ColorTranslator]::FromHtml('#DCD6C7')

# Brushes & Pens
$bBlack = New-Object System.Drawing.SolidBrush($colBlack)
$bDarkPure = New-Object System.Drawing.SolidBrush($colDarkPure)
$bDarkSurface = New-Object System.Drawing.SolidBrush($colDarkSurface)
$bBeige = New-Object System.Drawing.SolidBrush($colBeige)
$bBeigeLight = New-Object System.Drawing.SolidBrush($colBeigeLight)
$bOrange = New-Object System.Drawing.SolidBrush($colOrange)
$bWhite = New-Object System.Drawing.SolidBrush($colWhite)
$bGray = New-Object System.Drawing.SolidBrush($colGray)
$bGrayDark = New-Object System.Drawing.SolidBrush($colGrayDark)
$pBorder = New-Object System.Drawing.Pen($colBorder, 1)
$pOrange2 = New-Object System.Drawing.Pen($colOrange, 2)
$pWhite2 = New-Object System.Drawing.Pen($colWhite, 2)
$pOrangeBar = New-Object System.Drawing.Pen($colOrange, 5)

# Fonts
$fontFamily = 'Segoe UI'
$fLogo = New-Object System.Drawing.Font($fontFamily, 16, [System.Drawing.FontStyle]::Bold)
$fSubLogo = New-Object System.Drawing.Font($fontFamily, 9, [System.Drawing.FontStyle]::Bold)
$fNav = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Bold)
$fHeroTag = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Bold)
$fHeroH1 = New-Object System.Drawing.Font($fontFamily, 30, [System.Drawing.FontStyle]::Bold)
$fHeroH1Sub = New-Object System.Drawing.Font($fontFamily, 16, [System.Drawing.FontStyle]::Bold)
$fHeroDesc = New-Object System.Drawing.Font($fontFamily, 12, [System.Drawing.FontStyle]::Regular)
$fSecTitle = New-Object System.Drawing.Font($fontFamily, 24, [System.Drawing.FontStyle]::Bold)
$fSecSub = New-Object System.Drawing.Font($fontFamily, 11, [System.Drawing.FontStyle]::Regular)
$fCardTitle = New-Object System.Drawing.Font($fontFamily, 14, [System.Drawing.FontStyle]::Bold)
$fCardText = New-Object System.Drawing.Font($fontFamily, 10, [System.Drawing.FontStyle]::Regular)
$fMetricNum = New-Object System.Drawing.Font($fontFamily, 28, [System.Drawing.FontStyle]::Bold)
$fMetricLbl = New-Object System.Drawing.Font($fontFamily, 11, [System.Drawing.FontStyle]::Bold)
$fStars = New-Object System.Drawing.Font($fontFamily, 14, [System.Drawing.FontStyle]::Bold)

# Base background
$g.FillRectangle($bWhite, 0, 0, $width, $height)

# --- 1. HEADER (y: 0 - 80) ---
$g.FillRectangle($bBeigeLight, 0, 0, $width, 80)
$g.DrawLine($pBorder, 0, 80, $width, 80)

$logoPath = 'C:\Users\Alexa\.gemini\antigravity\scratch\slp-plastering\public\images\logo.jpg'
if (Test-Path $logoPath) {
    $imgLogo = [System.Drawing.Image]::FromFile($logoPath)
    $g.DrawImage($imgLogo, 100, 14, 52, 52)
    $g.DrawRectangle($pBorder, 100, 14, 52, 52)
    $imgLogo.Dispose()
}

$g.DrawString('SLP PLASTERING', $fLogo, $bBlack, 165, 20)
$g.DrawString('FORT WORTH, TEXAS, USA', $fSubLogo, $bOrange, 166, 44)

# Nav Links
$navLinks = @('Inicio', 'Nosotros', 'Servicios', 'Galeria', 'Por que elegirnos', 'FAQ', 'Contacto')
$nx = 480
foreach ($nl in $navLinks) {
    $sz = $g.MeasureString($nl, $fNav)
    $g.DrawString($nl, $fNav, $bBlack, $nx, 30)
    $nx += [int]($sz.Width + 24)
}

# Pill Button in Header (Call)
$g.FillRectangle($bBlack, 1080, 22, 170, 36)
$g.DrawString('Llamar (817) 000-0000', $fNav, $bWhite, 1092, 30)

$g.FillRectangle($bOrange, 1265, 22, 95, 36)
$g.DrawString('Cotizar', $fNav, $bWhite, 1285, 30)

# --- 2. HERO SECTION (y: 80 - 700) ---
$g.FillRectangle($bBeigeLight, 0, 80, $width, 620)
$g.DrawLine($pBorder, 0, 700, $width, 700)

$g.DrawString('EMPRESA DE CONSTRUCCION Y ACABADOS - TEXAS', $fHeroTag, $bOrange, 100, 120)

$g.DrawString('DONDE LOS PLANOS', $fHeroH1, $bOrange, 100, 155)
$g.DrawString('SE CONVIERTEN EN REALIDAD', $fHeroH1, $bOrange, 100, 200)
$g.DrawString('30 ANOS DE EXPERIENCIA EN PLASTERING Y STUCCO COMERCIAL', $fHeroH1Sub, $bBlack, 100, 255)
$g.DrawString('EN FORT WORTH, TEXAS, USA', $fSubLogo, $bOrange, 100, 285)

$heroText = 'Desde la primera idea hasta el acabado final, convertimos sus planos en obras solidas y duraderas - con comunicacion transparente, presupuestos claros y mano de obra artesanal de maxima confianza en Texas.'
$rectHeroText = New-Object System.Drawing.RectangleF(100, 315, 590, 80)
$g.DrawString($heroText, $fHeroDesc, $bGrayDark, $rectHeroText)

# Two Pill Buttons in Hero
$g.FillRectangle($bBlack, 100, 410, 220, 46)
$g.DrawString('Llamar al (817) 000-0000', $fNav, $bWhite, 130, 424)

$g.FillRectangle($bOrange, 335, 410, 210, 46)
$g.DrawString('Solicitar Cotizacion ->', $fNav, $bWhite, 365, 424)

$g.DrawLine($pBorder, 100, 490, 690, 490)
$g.DrawString('[X] 30 Anos de Trayectoria    [X] Enfoque Comercial    [X] Fort Worth y DFW Metro', $fNav, $bBlack, 100, 505)

# Hero Image Card on Right
$p11Path = 'C:\Users\Alexa\.gemini\antigravity\scratch\slp-plastering\public\images\projects\p11.jpeg'
if (Test-Path $p11Path) {
    $imgP11 = [System.Drawing.Image]::FromFile($p11Path)
    $g.DrawImage($imgP11, 740, 120, 600, 440)
    $g.DrawRectangle($pWhite2, 740, 120, 600, 440)
    
    # Review Floating Card (matching reference design)
    $g.FillRectangle($bWhite, 770, 450, 540, 130)
    $g.DrawRectangle($pBorder, 770, 450, 540, 130)
    
    $g.DrawString('*****', $fStars, $bOrange, 790, 460)
    $quoteText = '"Trabajo excepcional! Meticulosos en cada detalle, acabados de primera calidad en nuestro proyecto comercial y cumplimiento estricto de cronogramas. Ampliamente recomendados en Texas!"'
    $rectQuote = New-Object System.Drawing.RectangleF([float]790, [float]485, [float]500, [float]55)
    $g.DrawString($quoteText, $fCardText, $bBlack, $rectQuote)
    
    $g.DrawString('Emily Rowland / Contratista Comercial DFW - 5.0 de 5 estrellas', $fSubLogo, $bGrayDark, 790, 545)
    $g.DrawString('<  >', $fNav, $bOrange, 1260, 542)
    
    $imgP11.Dispose()
}

# --- 3. METRICS RIBBON (y: 700 - 810) ---
$g.FillRectangle($bBeige, 0, 700, $width, 110)
$g.DrawLine($pBorder, 0, 810, $width, 810)

$metrics = @(
    @{ Num='30+'; Lbl='Anos de Experiencia'; Desc='Trayectoria continua en Texas' },
    @{ Num='100%'; Lbl='Enfoque Comercial'; Desc='Estandares y codigos de edificacion' },
    @{ Num='DFW'; Lbl='Cobertura Completa'; Desc='Fort Worth, Dallas y todo el area' },
    @{ Num='1ra'; Lbl='Calidad Garantizada'; Desc='Mano de obra y materiales certificados' }
)

$mx = 140
foreach ($m in $metrics) {
    $g.DrawString($m.Num, $fMetricNum, $bOrange, $mx, 715)
    $g.DrawString($m.Lbl, $fMetricLbl, $bBlack, $mx, 760)
    $g.DrawString($m.Desc, $fCardText, $bGray, $mx, 780)
    $mx += 300
}

# --- 4. ABOUT SECTION (y: 810 - 1310) ---
$g.DrawString('HISTORIA Y TRAYECTORIA EMPRESARIAL', $fHeroTag, $bOrange, 100, 840)
$g.DrawString('Tres Decadas de Excelencia en Plastering y Stucco Comercial', $fSecTitle, $bBlack, 100, 865)

$proj3Path = 'C:\Users\Alexa\.gemini\antigravity\scratch\slp-plastering\public\images\projects\proyecto-3-plastering-salon-chimenea.jpg'
if (Test-Path $proj3Path) {
    $imgP3 = [System.Drawing.Image]::FromFile($proj3Path)
    $g.DrawImage($imgP3, 100, 915, 520, 340)
    $g.DrawRectangle($pBorder, 100, 915, 520, 340)
    
    $g.FillRectangle($bBlack, 500, 1160, 160, 80)
    $g.FillRectangle($bOrange, 500, 1160, 6, 80)
    $g.DrawString('30', $fMetricNum, $bBeige, 520, 1165)
    $g.DrawString('ANOS EN TEXAS', $fSubLogo, $bWhite, 520, 1215)
    $imgP3.Dispose()
}

$aboutLead = 'En SLP Plastering, con sede en Fort Worth, Texas, USA, combinamos el rigor de la ingenieria moderna con la maestria artesanal transmitida a lo largo de 30 anos.'
$aboutBody = 'Nos especializamos en la ejecucion de proyectos de plastering y stucco para edificaciones comerciales y residencias de alto nivel. Trabajamos hombro a hombro con constructores y arquitectos para garantizar una durabilidad insuperable frente a las variaciones climaticas de Texas.'
$rectAboutLead = New-Object System.Drawing.RectangleF([float]680, [float]925, [float]640, [float]60)
$rectAboutBody = New-Object System.Drawing.RectangleF([float]680, [float]985, [float]640, [float]80)
$g.DrawString($aboutLead, $fCardTitle, $bBlack, $rectAboutLead)
$g.DrawString($aboutBody, $fHeroDesc, $bGray, $rectAboutBody)

$checks = @(
    '[X] 30 anos de experiencia ininterrumpida en Texas',
    '[X] Especialistas en stucco comercial y sistemas EIFS',
    '[X] Plastering interior de yeso fino y pulido',
    '[X] Tecnicas tradicionales y contemporaneas a mano',
    '[X] Cumplimiento riguroso de normativas constructivas',
    '[X] Atencion personalizada directa por maestros yeseros'
)
$cy = 1080
foreach ($ch in $checks) {
    $g.DrawString($ch, $fNav, $bBlack, 680, $cy)
    $cy += 24
}

# --- 5. SERVICES SECTION (Dark Theme) (y: 1310 - 2120) ---
$g.FillRectangle($bBlack, 0, 1310, $width, 810)
$g.DrawLine($pBorder, 0, 1310, $width, 1310)

$g.DrawString('QUE HACEMOS', $fHeroTag, $bOrange, 100, 1345)
$g.DrawString('NUESTROS SERVICIOS', $fSecTitle, $bOrange, 100, 1370)

$leadServices = 'Ejecutamos una amplia gama de proyectos comerciales y residenciales, desde stucco exterior de 3 capas y sistemas EIFS hasta plastering interior de lujo y acabados arquitectonicos - hechos con esmero, hechos de la forma correcta.'
$rectLeadSvc = New-Object System.Drawing.RectangleF([float]100, [float]1415, [float]1000, [float]40)
$g.DrawString($leadServices, $fHeroDesc, $bBeige, $rectLeadSvc)

$servicesCards = @(
    @{ Title='Stucco Comercial de Alta Resistencia'; Img='p11.jpeg'; Badge='SERVICIO DESTACADO'; Desc='Sistemas de estuco tradicional de 3 capas y EIFS sintetico para locales comerciales, oficinas y fachadas expuestas al clima de Texas.'; P1='* 3 capas y barrera impermeabilizante'; P2='* Resistencia a choque termico y grietas' },
    @{ Title='Plastering Interior de Lujo'; Img='proyecto-2-plastering-campana-chimenea.jpg'; Badge='ESPECIALIDAD ARTESANAL'; Desc='Acabados lisos de yeso fino arquitectonico para campanas monumentales de chimenea, vestibulos y muros ejecutivos de alta definicion.'; P1='* Yeso veneciano y smooth plaster'; P2='* Aristas perfiladas y secado perfecto' },
    @{ Title='Acabados Arquitectonicos & Chimeneas'; Img='p5.jpeg'; Badge='PERSONALIZACION'; Desc='Modelado manual de nichos en arco, repisas integradas, cornisas perimetrales y texturas rusticas personalizadas para proyectos distintivos.'; P1='* Hornacinas y arcos decorativos'; P2='* Texturas artesanales personalizadas' },
    @{ Title='Restauracion de Fachadas Existentes'; Img='p1.jpeg'; Badge='MANTENIMIENTO PREVENTIVO'; Desc='Diagnostico tecnico, sellado estructural de grietas, repello invisible y restauracion integral de fachadas comerciales danadas.'; P1='* Sellado elastomerico y proteccion'; P2='* Emparejamiento exacto de color y grano' }
)

$pDarkBorder = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, 60, 60))
$bSemiWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))

$cardW = 590
$cardH = 280
$i = 0
foreach ($sc in $servicesCards) {
    $x = if ($i % 2 -eq 0) { 100 } else { 750 }
    $y = if ($i -lt 2) { 1470 } else { 1780 }

    $g.FillRectangle($bDarkSurface, $x, $y, $cardW, $cardH)
    $g.DrawRectangle($pDarkBorder, $x, $y, $cardW, $cardH)

    # Image top half
    $imgPath = 'C:\Users\Alexa\.gemini\antigravity\scratch\slp-plastering\public\images\projects\' + $sc.Img
    if (Test-Path $imgPath) {
        $imgS = [System.Drawing.Image]::FromFile($imgPath)
        $g.DrawImage($imgS, $x, $y, $cardW, 140)
        $imgS.Dispose()
    }
    
    # Badge on card image
    $g.FillRectangle($bOrange, $x + 14, $y + 12, 160, 22)
    $g.DrawString($sc.Badge, $fSubLogo, $bWhite, $x + 20, $y + 15)

    # Title & Link
    $g.DrawString($sc.Title, $fCardTitle, $bWhite, $x + 20, $y + 152)
    $g.DrawString('Cotizar >', $fNav, $bOrange, $x + $cardW - 80, $y + 154)

    # Desc & Bullets
    $rectCardD = New-Object System.Drawing.RectangleF([float]($x + 20), [float]($y + 180), [float]($cardW - 40), [float]45)
    $g.DrawString($sc.Desc, $fCardText, $bGray, $rectCardD)

    $g.DrawString($sc.P1 + '    ' + $sc.P2, $fCardText, $bBeige, $x + 20, $y + 245)

    $i++
}

# --- 6. WHY CHOOSE US (y: 2120 - 2450) ---
$g.FillRectangle($bDarkPure, 0, 2120, $width, 330)

$g.DrawString('CONFIANZA Y GARANTIA', $fHeroTag, $bOrange, 620, 2145)
$g.DrawString('Por Que Elegir SLP Plastering?', $fSecTitle, $bWhite, 500, 2170)

$whyPillars = @(
    @{ Title='30 Anos de Maestria'; Desc='Tres decadas de solidez continua en el mercado de Texas.' },
    @{ Title='Enfoque Comercial'; Desc='Conocimiento pleno de normativas, codigos y durabilidad requerida.' },
    @{ Title='Puntualidad de Entrega'; Desc='Cumplimiento riguroso de cronogramas en obra comercial.' },
    @{ Title='Materiales Certificados'; Desc='Mezclas de primera clase y selladores impermeabilizantes.' }
)

$px = 100
$brushCard = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(40, 255, 255, 255))
foreach ($p in $whyPillars) {
    $g.FillRectangle($brushCard, $px, 2225, 280, 160)
    $g.DrawRectangle($pBorder, $px, 2225, 280, 160)
    $g.DrawString($p.Title, $fCardTitle, $bBeige, $px + 15, 2240)
    $rectPDesc = New-Object System.Drawing.RectangleF([float]($px + 15), [float]2275, [float]250, [float]90)
    $g.DrawString($p.Desc, $fCardText, $bWhite, $rectPDesc)
    $px += 310
}

# --- 7. RICH GALLERY COLLAGE (y: 2450 - 3250) ---
$g.FillRectangle($bWhite, 0, 2450, $width, 800)

$g.DrawString('ARCHIVO REAL DE OBRAS TERMINADAS', $fHeroTag, $bOrange, 570, 2480)
$g.DrawString('Galeria de Proyectos Ejecutados', $fSecTitle, $bBlack, 500, 2505)
$g.DrawString('Evidencia fotografica 100% autentica de nuestras obras en Fort Worth, Dallas y todo el norte de Texas.', $fSecSub, $bGray, 380, 2540)

$filterTabs = @('Todos (45 Obras)', 'Stucco Comercial (18)', 'Plastering Interior (12)', 'Fachadas y Residencias (15)')
$tx = 260
foreach ($tab in $filterTabs) {
    if ($tab -match 'Todos') {
        $g.FillRectangle($bOrange, $tx, 2575, 170, 34)
        $g.DrawString($tab, $fNav, $bWhite, $tx + 20, 2583)
    } else {
        $g.FillRectangle($bBeige, $tx, 2575, 220, 34)
        $g.DrawString($tab, $fNav, $bBlack, $tx + 15, 2583)
    }
    $tx += if ($tab -match 'Todos') { 185 } else { 235 }
}

# 8 Real Photos Grid (2 rows of 4)
$collageItems = @(
    @{ File='p18.jpeg'; Title='Downtown Aquarium'; Cat='STUCCO COMERCIAL' },
    @{ File='p44.jpeg'; Title='Complejo Comercial Texas'; Cat='STUCCO COMERCIAL' },
    @{ File='p10.jpeg'; Title='Villa Mediterranea'; Cat='FACHADAS Y RESIDENCIAS' },
    @{ File='p14.jpeg'; Title='Finca Estilo Toscano'; Cat='FACHADAS Y RESIDENCIAS' },
    @{ File='proyecto-2-plastering-campana-chimenea.jpg'; Title='Campana Plastering Liso'; Cat='PLASTERING INTERIOR' },
    @{ File='p20.jpeg'; Title='Residencia con Portico'; Cat='FACHADAS Y RESIDENCIAS' },
    @{ File='p33.jpeg'; Title='Residencia Contemporanea'; Cat='FACHADAS Y RESIDENCIAS' },
    @{ File='p41.jpeg'; Title='Finca Chimeneas Dobles'; Cat='FACHADAS Y RESIDENCIAS' }
)

$gx = 100
$gy = 2635
$gw = 295
$gh = 200
$k = 0
foreach ($item in $collageItems) {
    $row = [Math]::Floor($k / 4)
    $col = $k % 4
    $x = 100 + ($col * 315)
    $y = $gy + ($row * 280)

    $imgPath = 'C:\Users\Alexa\.gemini\antigravity\scratch\slp-plastering\public\images\projects\' + $item.File
    if (Test-Path $imgPath) {
        $img = [System.Drawing.Image]::FromFile($imgPath)
        $g.DrawImage($img, $x, $y, $gw, $gh)
        $g.DrawRectangle($pBorder, $x, $y, $gw, $gh)
        $img.Dispose()
    }

    $g.FillRectangle($bWhite, $x, $y + $gh, $gw, 65)
    $g.DrawRectangle($pBorder, $x, $y + $gh, $gw, 65)
    $g.DrawString($item.Cat, $fSubLogo, $bOrange, $x + 10, $y + $gh + 8)
    $g.DrawString($item.Title, $fNav, $bBlack, $x + 10, $y + $gh + 24)
    $g.DrawString('Fort Worth, TX - Ver Ampliada [Zoom]', $fCardText, $bGray, $x + 10, $y + $gh + 42)

    $k++
}

# --- 8. MID-PAGE CTA BANNER (y: 3250 - 3510) ---
$g.FillRectangle($bOrange, 0, 3250, $width, 260)

$g.FillRectangle($bSemiWhite, 600, 3275, 240, 28)
$g.DrawString('30 ANOS DE EXPERIENCIA EN TEXAS', $fSubLogo, $bWhite, 615, 3281)

$g.DrawString('DONDE LOS PLANOS SE CONVIERTEN EN REALIDAD', $fHeroH1, $bWhite, 260, 3315)

$ctaSub = 'Permitanos dar vida a su proximo proyecto comercial o residencial en Fort Worth y todo el area de DFW. Presupuestos sin compromiso y asesoria tecnica directa.'
$rectCtaSub = New-Object System.Drawing.RectangleF([float]280, [float]3370, [float]880, [float]40)
$g.DrawString($ctaSub, $fHeroDesc, $bBeige, $rectCtaSub)

$g.FillRectangle($bBlack, 520, 3425, 220, 44)
$g.DrawString('Contactar a Nuestro Equipo', $fNav, $bWhite, 540, 3438)

$g.DrawRectangle($pWhite2, 760, 3425, 200, 44)
$g.DrawString('Llamar (817) 000-0000', $fNav, $bWhite, 785, 3438)

# --- 9. SPLIT FAQ SECTION (y: 3510 - 3960) ---
$g.FillRectangle($bBeigeLight, 0, 3510, $width, 450)
$g.DrawLine($pBorder, 0, 3510, $width, 3510)
$g.DrawLine($pBorder, 0, 3960, $width, 3960)

# Left column
$g.DrawString('DUDAS COMUNES', $fHeroTag, $bOrange, 100, 3540)
$g.DrawString('Preguntas Frecuentes', $fSecTitle, $bBlack, 100, 3565)
$faqIntro = 'Respuestas claras y tecnicas a las dudas mas frecuentes de contratistas, arquitectos y propietarios en Fort Worth, Texas.'
$rectFaqI = New-Object System.Drawing.RectangleF([float]100, [float]3605, [float]450, [float]60)
$g.DrawString($faqIntro, $fHeroDesc, $bGrayDark, $rectFaqI)

$g.FillRectangle($bOrange, 100, 3680, 220, 44)
$g.DrawString('Consultar por mi Proyecto ->', $fNav, $bWhite, 120, 3694)

# Right column accordion
$faqs = @(
    @{ Q='Cual es la diferencia tecnica entre plastering y stucco?'; A='El stucco se formula con cemento Portland y cal para exteriores resistentes a la intemperie. El plastering emplea yeso refinado para interiores lisos de alta definicion visual.' },
    @{ Q='Realizan proyectos comerciales de gran escala en Fort Worth y DFW?'; A='Si. Contamos con 30 anos atendiendo atracciones tematicas, oficinas comerciales, restaurantes y fachadas en Fort Worth, Dallas y condados aledanos.' },
    @{ Q='Como solicito una cotizacion para mi obra comercial o residencial?'; A='Puede llamarnos o completar el formulario a continuacion. Coordinamos visitas en sitio para mediciones tecnicas sin costo.' }
)

$fy = 3540
foreach ($fq in $faqs) {
    $g.FillRectangle($bWhite, 620, $fy, 720, 95)
    $g.DrawRectangle($pBorder, 620, $fy, 720, 95)
    $g.DrawString($fq.Q, $fCardTitle, $bBlack, 640, $fy + 14)
    $g.DrawString('v', $fNav, $bOrange, 1310, $fy + 14)
    $rectFA = New-Object System.Drawing.RectangleF([float]640, [float]($fy + 40), [float]670, [float]45)
    $g.DrawString($fq.A, $fCardText, $bGray, $rectFA)
    $fy += 110
}

# --- 10. CONTACT SECTION (y: 3960 - 4460) ---
$g.FillRectangle($bWhite, 0, 3960, $width, 500)

$g.DrawString('ATENCION DIRECTA EN TEXAS', $fHeroTag, $bOrange, 600, 3980)
$g.DrawString('Comuniquese con SLP Plastering', $fSecTitle, $bBlack, 490, 4005)
$g.DrawString('Consulte con especialistas con 30 anos de experiencia comprobada en Fort Worth, Texas.', $fSecSub, $bGray, 420, 4040)

# Contact Left Info Box
$g.FillRectangle($bBeigeLight, 100, 4075, 520, 350)
$g.DrawRectangle($pBorder, 100, 4075, 520, 350)
$g.DrawString('INFORMACION DE CONTACTO', $fCardTitle, $bBlack, 130, 4095)
$g.DrawString('Ubicacion: Fort Worth, Texas, USA (Atencion en todo DFW)', $fNav, $bBlack, 130, 4125)
$g.DrawString('Telefono Comercial: (817) 000-0000 (Editable en siteContent.js)', $fNav, $bBlack, 130, 4155)
$g.DrawString('Correo Electronico: info@slpplastering.com (Editable)', $fNav, $bBlack, 130, 4185)
$g.DrawString('Horario: Lunes a Sabado: 7:00 AM - 6:00 PM', $fNav, $bBlack, 130, 4215)

$g.FillRectangle($bBeige, 130, 4260, 460, 50)
$g.DrawString('Aviso: Coordinamos visitas tecnicas a obra en Fort Worth y DFW.', $fCardText, $bBlack, 145, 4275)

# Contact Right Form Box
$g.FillRectangle($bWhite, 660, 4075, 680, 350)
$g.DrawRectangle($pBorder, 660, 4075, 680, 350)
$g.DrawString('SOLICITAR COTIZACION SIN COMPROMISO', $fCardTitle, $bBlack, 690, 4095)

$g.DrawRectangle($pBorder, 690, 4130, 300, 36)
$g.DrawString('Nombre Completo *', $fCardText, $bGray, 700, 4140)

$g.DrawRectangle($pBorder, 1010, 4130, 300, 36)
$g.DrawString('Correo Electronico *', $fCardText, $bGray, 1020, 4140)

$g.DrawRectangle($pBorder, 690, 4180, 300, 36)
$g.DrawString('Telefono de Contacto *', $fCardText, $bGray, 700, 4190)

$g.DrawRectangle($pBorder, 1010, 4180, 300, 36)
$g.DrawString('Servicio: Stucco Comercial de 3 Capas v', $fCardText, $bBlack, 1020, 4190)

$g.DrawRectangle($pBorder, 690, 4230, 620, 65)
$g.DrawString('Detalles del Proyecto o Consulta en Fort Worth, Texas...', $fCardText, $bGray, 700, 4240)

$g.FillRectangle($bOrange, 690, 4310, 620, 44)
$g.DrawString('Enviar Solicitud de Cotizacion ->', $fNav, $bWhite, 890, 4323)

# --- 11. FOOTER (y: 4460 - 4900) ---
$g.FillRectangle($bDarkPure, 0, 4460, $width, 440)
$g.DrawLine($pOrangeBar, 0, 4460, $width, 4460)

$g.DrawString('SLP PLASTERING', $fLogo, $bWhite, 100, 4490)
$g.DrawString('30 anos de experiencia en plastering y stucco comercial', $fSubLogo, $bOrange, 100, 4520)
$g.DrawString('Fort Worth, Texas, USA', $fHeroTag, $bBeige, 100, 4545)
$rectFootDesc = New-Object System.Drawing.RectangleF(100, 4575, 380, 80)
$g.DrawString('Especialistas comerciales en acabados de yeso y estuco en Fort Worth, Arlington, Dallas y todo el DFW Metroplex.', $fCardText, $bGray, $rectFootDesc)

$g.DrawString('NAVEGACION', $fNav, $bBeige, 550, 4490)
$fLinks = @('Inicio', 'Nosotros', 'Servicios', 'Galeria de Proyectos', 'Por que elegirnos?', 'Preguntas Frecuentes', 'Contacto')
$fly = 4520
foreach ($fl in $fLinks) {
    $g.DrawString($fl, $fCardText, $bGray, 550, $fly)
    $fly += 20
}

$g.DrawString('SERVICIOS', $fNav, $bBeige, 820, 4490)
$fsLinks = @('Stucco Comercial de Alta Resistencia', 'Plastering Interior de Lujo', 'Acabados Arquitectonicos y Molduras', 'Restauracion de Fachadas')
$fsly = 4520
foreach ($fsl in $fsLinks) {
    $g.DrawString($fsl, $fCardText, $bGray, 820, $fsly)
    $fsly += 20
}

$g.DrawString('OPTIMIZACION LOCAL / SEO', $fNav, $bBeige, 1100, 4490)
$g.DrawString('Commercial Plastering Fort Worth', $fCardText, $bGray, 1100, 4520)
$g.DrawString('Commercial Stucco Fort Worth', $fCardText, $bGray, 1100, 4542)
$g.DrawString('Contratista de Estuco y Yeso en Fort Worth, Texas', $fCardText, $bGray, 1100, 4564)
$g.DrawString('Telefono: (817) 000-0000 (Editable)', $fCardText, $bBeige, 1100, 4590)

$g.DrawLine($pBorder, 100, 4740, 1340, 4740)
$g.DrawString('Copyright 2026 SLP Plastering. Fort Worth, Texas, USA. Todos los derechos reservados. | Desarrollado con React, CSS y JavaScript.', $fCardText, $bGray, 100, 4770)

$g.Dispose()
$outputPath = 'C:\Users\Alexa\.gemini\antigravity\scratch\slp-plastering\screenshot.png'
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Screenshot successfully saved to $outputPath"
