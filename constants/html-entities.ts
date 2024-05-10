interface HtmlEntity {
  codepoints: number[]
  character: string
}

const htmlEntities: { [key: string]: HtmlEntity } = {
  '&AElig': {
    codepoints: [198],
    character: 'Æ',
  },
  '&AElig;': {
    codepoints: [198],
    character: 'Æ',
  },
  '&AMP': {
    codepoints: [38],
    character: '&',
  },
  '&AMP;': {
    codepoints: [38],
    character: '&',
  },
  '&Aacute': {
    codepoints: [193],
    character: 'Á',
  },
  '&Aacute;': {
    codepoints: [193],
    character: 'Á',
  },
  '&Abreve;': {
    codepoints: [258],
    character: 'Ă',
  },
  '&Acirc': {
    codepoints: [194],
    character: 'Â',
  },
  '&Acirc;': {
    codepoints: [194],
    character: 'Â',
  },
  '&Acy;': {
    codepoints: [1040],
    character: 'А',
  },
  '&Afr;': {
    codepoints: [120068],
    character: '𝔄',
  },
  '&Agrave': {
    codepoints: [192],
    character: 'À',
  },
  '&Agrave;': {
    codepoints: [192],
    character: 'À',
  },
  '&Alpha;': {
    codepoints: [913],
    character: 'Α',
  },
  '&Amacr;': {
    codepoints: [256],
    character: 'Ā',
  },
  '&And;': {
    codepoints: [10835],
    character: '⩓',
  },
  '&Aogon;': {
    codepoints: [260],
    character: 'Ą',
  },
  '&Aopf;': {
    codepoints: [120120],
    character: '𝔸',
  },
  '&ApplyFunction;': {
    codepoints: [8289],
    character: '\u2061',
  },
  '&Aring': {
    codepoints: [197],
    character: 'Å',
  },
  '&Aring;': {
    codepoints: [197],
    character: 'Å',
  },
  '&Ascr;': {
    codepoints: [119964],
    character: '𝒜',
  },
  '&Assign;': {
    codepoints: [8788],
    character: '≔',
  },
  '&Atilde': {
    codepoints: [195],
    character: 'Ã',
  },
  '&Atilde;': {
    codepoints: [195],
    character: 'Ã',
  },
  '&Auml': {
    codepoints: [196],
    character: 'Ä',
  },
  '&Auml;': {
    codepoints: [196],
    character: 'Ä',
  },
  '&Backslash;': {
    codepoints: [8726],
    character: '∖',
  },
  '&Barv;': {
    codepoints: [10983],
    character: '⫧',
  },
  '&Barwed;': {
    codepoints: [8966],
    character: '⌆',
  },
  '&Bcy;': {
    codepoints: [1041],
    character: 'Б',
  },
  '&Because;': {
    codepoints: [8757],
    character: '∵',
  },
  '&Bernoullis;': {
    codepoints: [8492],
    character: 'ℬ',
  },
  '&Beta;': {
    codepoints: [914],
    character: 'Β',
  },
  '&Bfr;': {
    codepoints: [120069],
    character: '𝔅',
  },
  '&Bopf;': {
    codepoints: [120121],
    character: '𝔹',
  },
  '&Breve;': {
    codepoints: [728],
    character: '˘',
  },
  '&Bscr;': {
    codepoints: [8492],
    character: 'ℬ',
  },
  '&Bumpeq;': {
    codepoints: [8782],
    character: '≎',
  },
  '&CHcy;': {
    codepoints: [1063],
    character: 'Ч',
  },
  '&COPY': {
    codepoints: [169],
    character: '©',
  },
  '&COPY;': {
    codepoints: [169],
    character: '©',
  },
  '&Cacute;': {
    codepoints: [262],
    character: 'Ć',
  },
  '&Cap;': {
    codepoints: [8914],
    character: '⋒',
  },
  '&CapitalDifferentialD;': {
    codepoints: [8517],
    character: 'ⅅ',
  },
  '&Cayleys;': {
    codepoints: [8493],
    character: 'ℭ',
  },
  '&Ccaron;': {
    codepoints: [268],
    character: 'Č',
  },
  '&Ccedil': {
    codepoints: [199],
    character: 'Ç',
  },
  '&Ccedil;': {
    codepoints: [199],
    character: 'Ç',
  },
  '&Ccirc;': {
    codepoints: [264],
    character: 'Ĉ',
  },
  '&Cconint;': {
    codepoints: [8752],
    character: '∰',
  },
  '&Cdot;': {
    codepoints: [266],
    character: 'Ċ',
  },
  '&Cedilla;': {
    codepoints: [184],
    character: '¸',
  },
  '&CenterDot;': {
    codepoints: [183],
    character: '·',
  },
  '&Cfr;': {
    codepoints: [8493],
    character: 'ℭ',
  },
  '&Chi;': {
    codepoints: [935],
    character: 'Χ',
  },
  '&CircleDot;': {
    codepoints: [8857],
    character: '⊙',
  },
  '&CircleMinus;': {
    codepoints: [8854],
    character: '⊖',
  },
  '&CirclePlus;': {
    codepoints: [8853],
    character: '⊕',
  },
  '&CircleTimes;': {
    codepoints: [8855],
    character: '⊗',
  },
  '&ClockwiseContourIntegral;': {
    codepoints: [8754],
    character: '∲',
  },
  '&CloseCurlyDoubleQuote;': {
    codepoints: [8221],
    character: '”',
  },
  '&CloseCurlyQuote;': {
    codepoints: [8217],
    character: '’',
  },
  '&Colon;': {
    codepoints: [8759],
    character: '∷',
  },
  '&Colone;': {
    codepoints: [10868],
    character: '⩴',
  },
  '&Congruent;': {
    codepoints: [8801],
    character: '≡',
  },
  '&Conint;': {
    codepoints: [8751],
    character: '∯',
  },
  '&ContourIntegral;': {
    codepoints: [8750],
    character: '∮',
  },
  '&Copf;': {
    codepoints: [8450],
    character: 'ℂ',
  },
  '&Coproduct;': {
    codepoints: [8720],
    character: '∐',
  },
  '&CounterClockwiseContourIntegral;': {
    codepoints: [8755],
    character: '∳',
  },
  '&Cross;': {
    codepoints: [10799],
    character: '⨯',
  },
  '&Cscr;': {
    codepoints: [119966],
    character: '𝒞',
  },
  '&Cup;': {
    codepoints: [8915],
    character: '⋓',
  },
  '&CupCap;': {
    codepoints: [8781],
    character: '≍',
  },
  '&DD;': {
    codepoints: [8517],
    character: 'ⅅ',
  },
  '&DDotrahd;': {
    codepoints: [10513],
    character: '⤑',
  },
  '&DJcy;': {
    codepoints: [1026],
    character: 'Ђ',
  },
  '&DScy;': {
    codepoints: [1029],
    character: 'Ѕ',
  },
  '&DZcy;': {
    codepoints: [1039],
    character: 'Џ',
  },
  '&Dagger;': {
    codepoints: [8225],
    character: '‡',
  },
  '&Darr;': {
    codepoints: [8609],
    character: '↡',
  },
  '&Dashv;': {
    codepoints: [10980],
    character: '⫤',
  },
  '&Dcaron;': {
    codepoints: [270],
    character: 'Ď',
  },
  '&Dcy;': {
    codepoints: [1044],
    character: 'Д',
  },
  '&Del;': {
    codepoints: [8711],
    character: '∇',
  },
  '&Delta;': {
    codepoints: [916],
    character: 'Δ',
  },
  '&Dfr;': {
    codepoints: [120071],
    character: '𝔇',
  },
  '&DiacriticalAcute;': {
    codepoints: [180],
    character: '´',
  },
  '&DiacriticalDot;': {
    codepoints: [729],
    character: '˙',
  },
  '&DiacriticalDoubleAcute;': {
    codepoints: [733],
    character: '˝',
  },
  '&DiacriticalGrave;': {
    codepoints: [96],
    character: '`',
  },
  '&DiacriticalTilde;': {
    codepoints: [732],
    character: '˜',
  },
  '&Diamond;': {
    codepoints: [8900],
    character: '⋄',
  },
  '&DifferentialD;': {
    codepoints: [8518],
    character: 'ⅆ',
  },
  '&Dopf;': {
    codepoints: [120123],
    character: '𝔻',
  },
  '&Dot;': {
    codepoints: [168],
    character: '¨',
  },
  '&DotDot;': {
    codepoints: [8412],
    character: '⃜',
  },
  '&DotEqual;': {
    codepoints: [8784],
    character: '≐',
  },
  '&DoubleContourIntegral;': {
    codepoints: [8751],
    character: '∯',
  },
  '&DoubleDot;': {
    codepoints: [168],
    character: '¨',
  },
  '&DoubleDownArrow;': {
    codepoints: [8659],
    character: '⇓',
  },
  '&DoubleLeftArrow;': {
    codepoints: [8656],
    character: '⇐',
  },
  '&DoubleLeftRightArrow;': {
    codepoints: [8660],
    character: '⇔',
  },
  '&DoubleLeftTee;': {
    codepoints: [10980],
    character: '⫤',
  },
  '&DoubleLongLeftArrow;': {
    codepoints: [10232],
    character: '⟸',
  },
  '&DoubleLongLeftRightArrow;': {
    codepoints: [10234],
    character: '⟺',
  },
  '&DoubleLongRightArrow;': {
    codepoints: [10233],
    character: '⟹',
  },
  '&DoubleRightArrow;': {
    codepoints: [8658],
    character: '⇒',
  },
  '&DoubleRightTee;': {
    codepoints: [8872],
    character: '⊨',
  },
  '&DoubleUpArrow;': {
    codepoints: [8657],
    character: '⇑',
  },
  '&DoubleUpDownArrow;': {
    codepoints: [8661],
    character: '⇕',
  },
  '&DoubleVerticalBar;': {
    codepoints: [8741],
    character: '∥',
  },
  '&DownArrow;': {
    codepoints: [8595],
    character: '↓',
  },
  '&DownArrowBar;': {
    codepoints: [10515],
    character: '⤓',
  },
  '&DownArrowUpArrow;': {
    codepoints: [8693],
    character: '⇵',
  },
  '&DownBreve;': {
    codepoints: [785],
    character: '̑',
  },
  '&DownLeftRightVector;': {
    codepoints: [10576],
    character: '⥐',
  },
  '&DownLeftTeeVector;': {
    codepoints: [10590],
    character: '⥞',
  },
  '&DownLeftVector;': {
    codepoints: [8637],
    character: '↽',
  },
  '&DownLeftVectorBar;': {
    codepoints: [10582],
    character: '⥖',
  },
  '&DownRightTeeVector;': {
    codepoints: [10591],
    character: '⥟',
  },
  '&DownRightVector;': {
    codepoints: [8641],
    character: '⇁',
  },
  '&DownRightVectorBar;': {
    codepoints: [10583],
    character: '⥗',
  },
  '&DownTee;': {
    codepoints: [8868],
    character: '⊤',
  },
  '&DownTeeArrow;': {
    codepoints: [8615],
    character: '↧',
  },
  '&Downarrow;': {
    codepoints: [8659],
    character: '⇓',
  },
  '&Dscr;': {
    codepoints: [119967],
    character: '𝒟',
  },
  '&Dstrok;': {
    codepoints: [272],
    character: 'Đ',
  },
  '&ENG;': {
    codepoints: [330],
    character: 'Ŋ',
  },
  '&ETH': {
    codepoints: [208],
    character: 'Ð',
  },
  '&ETH;': {
    codepoints: [208],
    character: 'Ð',
  },
  '&Eacute': {
    codepoints: [201],
    character: 'É',
  },
  '&Eacute;': {
    codepoints: [201],
    character: 'É',
  },
  '&Ecaron;': {
    codepoints: [282],
    character: 'Ě',
  },
  '&Ecirc': {
    codepoints: [202],
    character: 'Ê',
  },
  '&Ecirc;': {
    codepoints: [202],
    character: 'Ê',
  },
  '&Ecy;': {
    codepoints: [1069],
    character: 'Э',
  },
  '&Edot;': {
    codepoints: [278],
    character: 'Ė',
  },
  '&Efr;': {
    codepoints: [120072],
    character: '𝔈',
  },
  '&Egrave': {
    codepoints: [200],
    character: 'È',
  },
  '&Egrave;': {
    codepoints: [200],
    character: 'È',
  },
  '&Element;': {
    codepoints: [8712],
    character: '∈',
  },
  '&Emacr;': {
    codepoints: [274],
    character: 'Ē',
  },
  '&EmptySmallSquare;': {
    codepoints: [9723],
    character: '◻',
  },
  '&EmptyVerySmallSquare;': {
    codepoints: [9643],
    character: '▫',
  },
  '&Eogon;': {
    codepoints: [280],
    character: 'Ę',
  },
  '&Eopf;': {
    codepoints: [120124],
    character: '𝔼',
  },
  '&Epsilon;': {
    codepoints: [917],
    character: 'Ε',
  },
  '&Equal;': {
    codepoints: [10869],
    character: '⩵',
  },
  '&EqualTilde;': {
    codepoints: [8770],
    character: '≂',
  },
  '&Equilibrium;': {
    codepoints: [8652],
    character: '⇌',
  },
  '&Escr;': {
    codepoints: [8496],
    character: 'ℰ',
  },
  '&Esim;': {
    codepoints: [10867],
    character: '⩳',
  },
  '&Eta;': {
    codepoints: [919],
    character: 'Η',
  },
  '&Euml': {
    codepoints: [203],
    character: 'Ë',
  },
  '&Euml;': {
    codepoints: [203],
    character: 'Ë',
  },
  '&Exists;': {
    codepoints: [8707],
    character: '∃',
  },
  '&ExponentialE;': {
    codepoints: [8519],
    character: 'ⅇ',
  },
  '&Fcy;': {
    codepoints: [1060],
    character: 'Ф',
  },
  '&Ffr;': {
    codepoints: [120073],
    character: '𝔉',
  },
  '&FilledSmallSquare;': {
    codepoints: [9724],
    character: '◼',
  },
  '&FilledVerySmallSquare;': {
    codepoints: [9642],
    character: '▪',
  },
  '&Fopf;': {
    codepoints: [120125],
    character: '𝔽',
  },
  '&ForAll;': {
    codepoints: [8704],
    character: '∀',
  },
  '&Fouriertrf;': {
    codepoints: [8497],
    character: 'ℱ',
  },
  '&Fscr;': {
    codepoints: [8497],
    character: 'ℱ',
  },
  '&GJcy;': {
    codepoints: [1027],
    character: 'Ѓ',
  },
  '&GT': {
    codepoints: [62],
    character: '>',
  },
  '&GT;': {
    codepoints: [62],
    character: '>',
  },
  '&Gamma;': {
    codepoints: [915],
    character: 'Γ',
  },
  '&Gammad;': {
    codepoints: [988],
    character: 'Ϝ',
  },
  '&Gbreve;': {
    codepoints: [286],
    character: 'Ğ',
  },
  '&Gcedil;': {
    codepoints: [290],
    character: 'Ģ',
  },
  '&Gcirc;': {
    codepoints: [284],
    character: 'Ĝ',
  },
  '&Gcy;': {
    codepoints: [1043],
    character: 'Г',
  },
  '&Gdot;': {
    codepoints: [288],
    character: 'Ġ',
  },
  '&Gfr;': {
    codepoints: [120074],
    character: '𝔊',
  },
  '&Gg;': {
    codepoints: [8921],
    character: '⋙',
  },
  '&Gopf;': {
    codepoints: [120126],
    character: '𝔾',
  },
  '&GreaterEqual;': {
    codepoints: [8805],
    character: '≥',
  },
  '&GreaterEqualLess;': {
    codepoints: [8923],
    character: '⋛',
  },
  '&GreaterFullEqual;': {
    codepoints: [8807],
    character: '≧',
  },
  '&GreaterGreater;': {
    codepoints: [10914],
    character: '⪢',
  },
  '&GreaterLess;': {
    codepoints: [8823],
    character: '≷',
  },
  '&GreaterSlantEqual;': {
    codepoints: [10878],
    character: '⩾',
  },
  '&GreaterTilde;': {
    codepoints: [8819],
    character: '≳',
  },
  '&Gscr;': {
    codepoints: [119970],
    character: '𝒢',
  },
  '&Gt;': {
    codepoints: [8811],
    character: '≫',
  },
  '&HARDcy;': {
    codepoints: [1066],
    character: 'Ъ',
  },
  '&Hacek;': {
    codepoints: [711],
    character: 'ˇ',
  },
  '&Hat;': {
    codepoints: [94],
    character: '^',
  },
  '&Hcirc;': {
    codepoints: [292],
    character: 'Ĥ',
  },
  '&Hfr;': {
    codepoints: [8460],
    character: 'ℌ',
  },
  '&HilbertSpace;': {
    codepoints: [8459],
    character: 'ℋ',
  },
  '&Hopf;': {
    codepoints: [8461],
    character: 'ℍ',
  },
  '&HorizontalLine;': {
    codepoints: [9472],
    character: '─',
  },
  '&Hscr;': {
    codepoints: [8459],
    character: 'ℋ',
  },
  '&Hstrok;': {
    codepoints: [294],
    character: 'Ħ',
  },
  '&HumpDownHump;': {
    codepoints: [8782],
    character: '≎',
  },
  '&HumpEqual;': {
    codepoints: [8783],
    character: '≏',
  },
  '&IEcy;': {
    codepoints: [1045],
    character: 'Е',
  },
  '&IJlig;': {
    codepoints: [306],
    character: 'Ĳ',
  },
  '&IOcy;': {
    codepoints: [1025],
    character: 'Ё',
  },
  '&Iacute': {
    codepoints: [205],
    character: 'Í',
  },
  '&Iacute;': {
    codepoints: [205],
    character: 'Í',
  },
  '&Icirc': {
    codepoints: [206],
    character: 'Î',
  },
  '&Icirc;': {
    codepoints: [206],
    character: 'Î',
  },
  '&Icy;': {
    codepoints: [1048],
    character: 'И',
  },
  '&Idot;': {
    codepoints: [304],
    character: 'İ',
  },
  '&Ifr;': {
    codepoints: [8465],
    character: 'ℑ',
  },
  '&Igrave': {
    codepoints: [204],
    character: 'Ì',
  },
  '&Igrave;': {
    codepoints: [204],
    character: 'Ì',
  },
  '&Im;': {
    codepoints: [8465],
    character: 'ℑ',
  },
  '&Imacr;': {
    codepoints: [298],
    character: 'Ī',
  },
  '&ImaginaryI;': {
    codepoints: [8520],
    character: 'ⅈ',
  },
  '&Implies;': {
    codepoints: [8658],
    character: '⇒',
  },
  '&Int;': {
    codepoints: [8748],
    character: '∬',
  },
  '&Integral;': {
    codepoints: [8747],
    character: '∫',
  },
  '&Intersection;': {
    codepoints: [8898],
    character: '⋂',
  },
  '&InvisibleComma;': {
    codepoints: [8291],
    character: '\u2063',
  },
  '&InvisibleTimes;': {
    codepoints: [8290],
    character: '\u2062',
  },
  '&Iogon;': {
    codepoints: [302],
    character: 'Į',
  },
  '&Iopf;': {
    codepoints: [120128],
    character: '𝕀',
  },
  '&Iota;': {
    codepoints: [921],
    character: 'Ι',
  },
  '&Iscr;': {
    codepoints: [8464],
    character: 'ℐ',
  },
  '&Itilde;': {
    codepoints: [296],
    character: 'Ĩ',
  },
  '&Iukcy;': {
    codepoints: [1030],
    character: 'І',
  },
  '&Iuml': {
    codepoints: [207],
    character: 'Ï',
  },
  '&Iuml;': {
    codepoints: [207],
    character: 'Ï',
  },
  '&Jcirc;': {
    codepoints: [308],
    character: 'Ĵ',
  },
  '&Jcy;': {
    codepoints: [1049],
    character: 'Й',
  },
  '&Jfr;': {
    codepoints: [120077],
    character: '𝔍',
  },
  '&Jopf;': {
    codepoints: [120129],
    character: '𝕁',
  },
  '&Jscr;': {
    codepoints: [119973],
    character: '𝒥',
  },
  '&Jsercy;': {
    codepoints: [1032],
    character: 'Ј',
  },
  '&Jukcy;': {
    codepoints: [1028],
    character: 'Є',
  },
  '&KHcy;': {
    codepoints: [1061],
    character: 'Х',
  },
  '&KJcy;': {
    codepoints: [1036],
    character: 'Ќ',
  },
  '&Kappa;': {
    codepoints: [922],
    character: 'Κ',
  },
  '&Kcedil;': {
    codepoints: [310],
    character: 'Ķ',
  },
  '&Kcy;': {
    codepoints: [1050],
    character: 'К',
  },
  '&Kfr;': {
    codepoints: [120078],
    character: '𝔎',
  },
  '&Kopf;': {
    codepoints: [120130],
    character: '𝕂',
  },
  '&Kscr;': {
    codepoints: [119974],
    character: '𝒦',
  },
  '&LJcy;': {
    codepoints: [1033],
    character: 'Љ',
  },
  '&LT': {
    codepoints: [60],
    character: '<',
  },
  '&LT;': {
    codepoints: [60],
    character: '<',
  },
  '&Lacute;': {
    codepoints: [313],
    character: 'Ĺ',
  },
  '&Lambda;': {
    codepoints: [923],
    character: 'Λ',
  },
  '&Lang;': {
    codepoints: [10218],
    character: '⟪',
  },
  '&Laplacetrf;': {
    codepoints: [8466],
    character: 'ℒ',
  },
  '&Larr;': {
    codepoints: [8606],
    character: '↞',
  },
  '&Lcaron;': {
    codepoints: [317],
    character: 'Ľ',
  },
  '&Lcedil;': {
    codepoints: [315],
    character: 'Ļ',
  },
  '&Lcy;': {
    codepoints: [1051],
    character: 'Л',
  },
  '&LeftAngleBracket;': {
    codepoints: [10216],
    character: '⟨',
  },
  '&LeftArrow;': {
    codepoints: [8592],
    character: '←',
  },
  '&LeftArrowBar;': {
    codepoints: [8676],
    character: '⇤',
  },
  '&LeftArrowRightArrow;': {
    codepoints: [8646],
    character: '⇆',
  },
  '&LeftCeiling;': {
    codepoints: [8968],
    character: '⌈',
  },
  '&LeftDoubleBracket;': {
    codepoints: [10214],
    character: '⟦',
  },
  '&LeftDownTeeVector;': {
    codepoints: [10593],
    character: '⥡',
  },
  '&LeftDownVector;': {
    codepoints: [8643],
    character: '⇃',
  },
  '&LeftDownVectorBar;': {
    codepoints: [10585],
    character: '⥙',
  },
  '&LeftFloor;': {
    codepoints: [8970],
    character: '⌊',
  },
  '&LeftRightArrow;': {
    codepoints: [8596],
    character: '↔',
  },
  '&LeftRightVector;': {
    codepoints: [10574],
    character: '⥎',
  },
  '&LeftTee;': {
    codepoints: [8867],
    character: '⊣',
  },
  '&LeftTeeArrow;': {
    codepoints: [8612],
    character: '↤',
  },
  '&LeftTeeVector;': {
    codepoints: [10586],
    character: '⥚',
  },
  '&LeftTriangle;': {
    codepoints: [8882],
    character: '⊲',
  },
  '&LeftTriangleBar;': {
    codepoints: [10703],
    character: '⧏',
  },
  '&LeftTriangleEqual;': {
    codepoints: [8884],
    character: '⊴',
  },
  '&LeftUpDownVector;': {
    codepoints: [10577],
    character: '⥑',
  },
  '&LeftUpTeeVector;': {
    codepoints: [10592],
    character: '⥠',
  },
  '&LeftUpVector;': {
    codepoints: [8639],
    character: '↿',
  },
  '&LeftUpVectorBar;': {
    codepoints: [10584],
    character: '⥘',
  },
  '&LeftVector;': {
    codepoints: [8636],
    character: '↼',
  },
  '&LeftVectorBar;': {
    codepoints: [10578],
    character: '⥒',
  },
  '&Leftarrow;': {
    codepoints: [8656],
    character: '⇐',
  },
  '&Leftrightarrow;': {
    codepoints: [8660],
    character: '⇔',
  },
  '&LessEqualGreater;': {
    codepoints: [8922],
    character: '⋚',
  },
  '&LessFullEqual;': {
    codepoints: [8806],
    character: '≦',
  },
  '&LessGreater;': {
    codepoints: [8822],
    character: '≶',
  },
  '&LessLess;': {
    codepoints: [10913],
    character: '⪡',
  },
  '&LessSlantEqual;': {
    codepoints: [10877],
    character: '⩽',
  },
  '&LessTilde;': {
    codepoints: [8818],
    character: '≲',
  },
  '&Lfr;': {
    codepoints: [120079],
    character: '𝔏',
  },
  '&Ll;': {
    codepoints: [8920],
    character: '⋘',
  },
  '&Lleftarrow;': {
    codepoints: [8666],
    character: '⇚',
  },
  '&Lmidot;': {
    codepoints: [319],
    character: 'Ŀ',
  },
  '&LongLeftArrow;': {
    codepoints: [10229],
    character: '⟵',
  },
  '&LongLeftRightArrow;': {
    codepoints: [10231],
    character: '⟷',
  },
  '&LongRightArrow;': {
    codepoints: [10230],
    character: '⟶',
  },
  '&Longleftarrow;': {
    codepoints: [10232],
    character: '⟸',
  },
  '&Longleftrightarrow;': {
    codepoints: [10234],
    character: '⟺',
  },
  '&Longrightarrow;': {
    codepoints: [10233],
    character: '⟹',
  },
  '&Lopf;': {
    codepoints: [120131],
    character: '𝕃',
  },
  '&LowerLeftArrow;': {
    codepoints: [8601],
    character: '↙',
  },
  '&LowerRightArrow;': {
    codepoints: [8600],
    character: '↘',
  },
  '&Lscr;': {
    codepoints: [8466],
    character: 'ℒ',
  },
  '&Lsh;': {
    codepoints: [8624],
    character: '↰',
  },
  '&Lstrok;': {
    codepoints: [321],
    character: 'Ł',
  },
  '&Lt;': {
    codepoints: [8810],
    character: '≪',
  },
  '&Map;': {
    codepoints: [10501],
    character: '⤅',
  },
  '&Mcy;': {
    codepoints: [1052],
    character: 'М',
  },
  '&MediumSpace;': {
    codepoints: [8287],
    character: ' ',
  },
  '&Mellintrf;': {
    codepoints: [8499],
    character: 'ℳ',
  },
  '&Mfr;': {
    codepoints: [120080],
    character: '𝔐',
  },
  '&MinusPlus;': {
    codepoints: [8723],
    character: '∓',
  },
  '&Mopf;': {
    codepoints: [120132],
    character: '𝕄',
  },
  '&Mscr;': {
    codepoints: [8499],
    character: 'ℳ',
  },
  '&Mu;': {
    codepoints: [924],
    character: 'Μ',
  },
  '&NJcy;': {
    codepoints: [1034],
    character: 'Њ',
  },
  '&Nacute;': {
    codepoints: [323],
    character: 'Ń',
  },
  '&Ncaron;': {
    codepoints: [327],
    character: 'Ň',
  },
  '&Ncedil;': {
    codepoints: [325],
    character: 'Ņ',
  },
  '&Ncy;': {
    codepoints: [1053],
    character: 'Н',
  },
  '&NegativeMediumSpace;': {
    codepoints: [8203],
    character: '​',
  },
  '&NegativeThickSpace;': {
    codepoints: [8203],
    character: '​',
  },
  '&NegativeThinSpace;': {
    codepoints: [8203],
    character: '​',
  },
  '&NegativeVeryThinSpace;': {
    codepoints: [8203],
    character: '​',
  },
  '&NestedGreaterGreater;': {
    codepoints: [8811],
    character: '≫',
  },
  '&NestedLessLess;': {
    codepoints: [8810],
    character: '≪',
  },
  '&NewLine;': {
    codepoints: [10],
    character: '\n',
  },
  '&Nfr;': {
    codepoints: [120081],
    character: '𝔑',
  },
  '&NoBreak;': {
    codepoints: [8288],
    character: '\u2060',
  },
  '&NonBreakingSpace;': {
    codepoints: [160],
    character: ' ',
  },
  '&Nopf;': {
    codepoints: [8469],
    character: 'ℕ',
  },
  '&Not;': {
    codepoints: [10988],
    character: '⫬',
  },
  '&NotCongruent;': {
    codepoints: [8802],
    character: '≢',
  },
  '&NotCupCap;': {
    codepoints: [8813],
    character: '≭',
  },
  '&NotDoubleVerticalBar;': {
    codepoints: [8742],
    character: '∦',
  },
  '&NotElement;': {
    codepoints: [8713],
    character: '∉',
  },
  '&NotEqual;': {
    codepoints: [8800],
    character: '≠',
  },
  '&NotEqualTilde;': {
    codepoints: [8770, 824],
    character: '≂̸',
  },
  '&NotExists;': {
    codepoints: [8708],
    character: '∄',
  },
  '&NotGreater;': {
    codepoints: [8815],
    character: '≯',
  },
  '&NotGreaterEqual;': {
    codepoints: [8817],
    character: '≱',
  },
  '&NotGreaterFullEqual;': {
    codepoints: [8807, 824],
    character: '≧̸',
  },
  '&NotGreaterGreater;': {
    codepoints: [8811, 824],
    character: '≫̸',
  },
  '&NotGreaterLess;': {
    codepoints: [8825],
    character: '≹',
  },
  '&NotGreaterSlantEqual;': {
    codepoints: [10878, 824],
    character: '⩾̸',
  },
  '&NotGreaterTilde;': {
    codepoints: [8821],
    character: '≵',
  },
  '&NotHumpDownHump;': {
    codepoints: [8782, 824],
    character: '≎̸',
  },
  '&NotHumpEqual;': {
    codepoints: [8783, 824],
    character: '≏̸',
  },
  '&NotLeftTriangle;': {
    codepoints: [8938],
    character: '⋪',
  },
  '&NotLeftTriangleBar;': {
    codepoints: [10703, 824],
    character: '⧏̸',
  },
  '&NotLeftTriangleEqual;': {
    codepoints: [8940],
    character: '⋬',
  },
  '&NotLess;': {
    codepoints: [8814],
    character: '≮',
  },
  '&NotLessEqual;': {
    codepoints: [8816],
    character: '≰',
  },
  '&NotLessGreater;': {
    codepoints: [8824],
    character: '≸',
  },
  '&NotLessLess;': {
    codepoints: [8810, 824],
    character: '≪̸',
  },
  '&NotLessSlantEqual;': {
    codepoints: [10877, 824],
    character: '⩽̸',
  },
  '&NotLessTilde;': {
    codepoints: [8820],
    character: '≴',
  },
  '&NotNestedGreaterGreater;': {
    codepoints: [10914, 824],
    character: '⪢̸',
  },
  '&NotNestedLessLess;': {
    codepoints: [10913, 824],
    character: '⪡̸',
  },
  '&NotPrecedes;': {
    codepoints: [8832],
    character: '⊀',
  },
  '&NotPrecedesEqual;': {
    codepoints: [10927, 824],
    character: '⪯̸',
  },
  '&NotPrecedesSlantEqual;': {
    codepoints: [8928],
    character: '⋠',
  },
  '&NotReverseElement;': {
    codepoints: [8716],
    character: '∌',
  },
  '&NotRightTriangle;': {
    codepoints: [8939],
    character: '⋫',
  },
  '&NotRightTriangleBar;': {
    codepoints: [10704, 824],
    character: '⧐̸',
  },
  '&NotRightTriangleEqual;': {
    codepoints: [8941],
    character: '⋭',
  },
  '&NotSquareSubset;': {
    codepoints: [8847, 824],
    character: '⊏̸',
  },
  '&NotSquareSubsetEqual;': {
    codepoints: [8930],
    character: '⋢',
  },
  '&NotSquareSuperset;': {
    codepoints: [8848, 824],
    character: '⊐̸',
  },
  '&NotSquareSupersetEqual;': {
    codepoints: [8931],
    character: '⋣',
  },
  '&NotSubset;': {
    codepoints: [8834, 8402],
    character: '⊂⃒',
  },
  '&NotSubsetEqual;': {
    codepoints: [8840],
    character: '⊈',
  },
  '&NotSucceeds;': {
    codepoints: [8833],
    character: '⊁',
  },
  '&NotSucceedsEqual;': {
    codepoints: [10928, 824],
    character: '⪰̸',
  },
  '&NotSucceedsSlantEqual;': {
    codepoints: [8929],
    character: '⋡',
  },
  '&NotSucceedsTilde;': {
    codepoints: [8831, 824],
    character: '≿̸',
  },
  '&NotSuperset;': {
    codepoints: [8835, 8402],
    character: '⊃⃒',
  },
  '&NotSupersetEqual;': {
    codepoints: [8841],
    character: '⊉',
  },
  '&NotTilde;': {
    codepoints: [8769],
    character: '≁',
  },
  '&NotTildeEqual;': {
    codepoints: [8772],
    character: '≄',
  },
  '&NotTildeFullEqual;': {
    codepoints: [8775],
    character: '≇',
  },
  '&NotTildeTilde;': {
    codepoints: [8777],
    character: '≉',
  },
  '&NotVerticalBar;': {
    codepoints: [8740],
    character: '∤',
  },
  '&Nscr;': {
    codepoints: [119977],
    character: '𝒩',
  },
  '&Ntilde': {
    codepoints: [209],
    character: 'Ñ',
  },
  '&Ntilde;': {
    codepoints: [209],
    character: 'Ñ',
  },
  '&Nu;': {
    codepoints: [925],
    character: 'Ν',
  },
  '&OElig;': {
    codepoints: [338],
    character: 'Œ',
  },
  '&Oacute': {
    codepoints: [211],
    character: 'Ó',
  },
  '&Oacute;': {
    codepoints: [211],
    character: 'Ó',
  },
  '&Ocirc': {
    codepoints: [212],
    character: 'Ô',
  },
  '&Ocirc;': {
    codepoints: [212],
    character: 'Ô',
  },
  '&Ocy;': {
    codepoints: [1054],
    character: 'О',
  },
  '&Odblac;': {
    codepoints: [336],
    character: 'Ő',
  },
  '&Ofr;': {
    codepoints: [120082],
    character: '𝔒',
  },
  '&Ograve': {
    codepoints: [210],
    character: 'Ò',
  },
  '&Ograve;': {
    codepoints: [210],
    character: 'Ò',
  },
  '&Omacr;': {
    codepoints: [332],
    character: 'Ō',
  },
  '&Omega;': {
    codepoints: [937],
    character: 'Ω',
  },
  '&Omicron;': {
    codepoints: [927],
    character: 'Ο',
  },
  '&Oopf;': {
    codepoints: [120134],
    character: '𝕆',
  },
  '&OpenCurlyDoubleQuote;': {
    codepoints: [8220],
    character: '“',
  },
  '&OpenCurlyQuote;': {
    codepoints: [8216],
    character: '‘',
  },
  '&Or;': {
    codepoints: [10836],
    character: '⩔',
  },
  '&Oscr;': {
    codepoints: [119978],
    character: '𝒪',
  },
  '&Oslash': {
    codepoints: [216],
    character: 'Ø',
  },
  '&Oslash;': {
    codepoints: [216],
    character: 'Ø',
  },
  '&Otilde': {
    codepoints: [213],
    character: 'Õ',
  },
  '&Otilde;': {
    codepoints: [213],
    character: 'Õ',
  },
  '&Otimes;': {
    codepoints: [10807],
    character: '⨷',
  },
  '&Ouml': {
    codepoints: [214],
    character: 'Ö',
  },
  '&Ouml;': {
    codepoints: [214],
    character: 'Ö',
  },
  '&OverBar;': {
    codepoints: [8254],
    character: '‾',
  },
  '&OverBrace;': {
    codepoints: [9182],
    character: '⏞',
  },
  '&OverBracket;': {
    codepoints: [9140],
    character: '⎴',
  },
  '&OverParenthesis;': {
    codepoints: [9180],
    character: '⏜',
  },
  '&PartialD;': {
    codepoints: [8706],
    character: '∂',
  },
  '&Pcy;': {
    codepoints: [1055],
    character: 'П',
  },
  '&Pfr;': {
    codepoints: [120083],
    character: '𝔓',
  },
  '&Phi;': {
    codepoints: [934],
    character: 'Φ',
  },
  '&Pi;': {
    codepoints: [928],
    character: 'Π',
  },
  '&PlusMinus;': {
    codepoints: [177],
    character: '±',
  },
  '&Poincareplane;': {
    codepoints: [8460],
    character: 'ℌ',
  },
  '&Popf;': {
    codepoints: [8473],
    character: 'ℙ',
  },
  '&Pr;': {
    codepoints: [10939],
    character: '⪻',
  },
  '&Precedes;': {
    codepoints: [8826],
    character: '≺',
  },
  '&PrecedesEqual;': {
    codepoints: [10927],
    character: '⪯',
  },
  '&PrecedesSlantEqual;': {
    codepoints: [8828],
    character: '≼',
  },
  '&PrecedesTilde;': {
    codepoints: [8830],
    character: '≾',
  },
  '&Prime;': {
    codepoints: [8243],
    character: '″',
  },
  '&Product;': {
    codepoints: [8719],
    character: '∏',
  },
  '&Proportion;': {
    codepoints: [8759],
    character: '∷',
  },
  '&Proportional;': {
    codepoints: [8733],
    character: '∝',
  },
  '&Pscr;': {
    codepoints: [119979],
    character: '𝒫',
  },
  '&Psi;': {
    codepoints: [936],
    character: 'Ψ',
  },
  '&QUOT': {
    codepoints: [34],
    character: '"',
  },
  '&QUOT;': {
    codepoints: [34],
    character: '"',
  },
  '&Qfr;': {
    codepoints: [120084],
    character: '𝔔',
  },
  '&Qopf;': {
    codepoints: [8474],
    character: 'ℚ',
  },
  '&Qscr;': {
    codepoints: [119980],
    character: '𝒬',
  },
  '&RBarr;': {
    codepoints: [10512],
    character: '⤐',
  },
  '&REG': {
    codepoints: [174],
    character: '®',
  },
  '&REG;': {
    codepoints: [174],
    character: '®',
  },
  '&Racute;': {
    codepoints: [340],
    character: 'Ŕ',
  },
  '&Rang;': {
    codepoints: [10219],
    character: '⟫',
  },
  '&Rarr;': {
    codepoints: [8608],
    character: '↠',
  },
  '&Rarrtl;': {
    codepoints: [10518],
    character: '⤖',
  },
  '&Rcaron;': {
    codepoints: [344],
    character: 'Ř',
  },
  '&Rcedil;': {
    codepoints: [342],
    character: 'Ŗ',
  },
  '&Rcy;': {
    codepoints: [1056],
    character: 'Р',
  },
  '&Re;': {
    codepoints: [8476],
    character: 'ℜ',
  },
  '&ReverseElement;': {
    codepoints: [8715],
    character: '∋',
  },
  '&ReverseEquilibrium;': {
    codepoints: [8651],
    character: '⇋',
  },
  '&ReverseUpEquilibrium;': {
    codepoints: [10607],
    character: '⥯',
  },
  '&Rfr;': {
    codepoints: [8476],
    character: 'ℜ',
  },
  '&Rho;': {
    codepoints: [929],
    character: 'Ρ',
  },
  '&RightAngleBracket;': {
    codepoints: [10217],
    character: '⟩',
  },
  '&RightArrow;': {
    codepoints: [8594],
    character: '→',
  },
  '&RightArrowBar;': {
    codepoints: [8677],
    character: '⇥',
  },
  '&RightArrowLeftArrow;': {
    codepoints: [8644],
    character: '⇄',
  },
  '&RightCeiling;': {
    codepoints: [8969],
    character: '⌉',
  },
  '&RightDoubleBracket;': {
    codepoints: [10215],
    character: '⟧',
  },
  '&RightDownTeeVector;': {
    codepoints: [10589],
    character: '⥝',
  },
  '&RightDownVector;': {
    codepoints: [8642],
    character: '⇂',
  },
  '&RightDownVectorBar;': {
    codepoints: [10581],
    character: '⥕',
  },
  '&RightFloor;': {
    codepoints: [8971],
    character: '⌋',
  },
  '&RightTee;': {
    codepoints: [8866],
    character: '⊢',
  },
  '&RightTeeArrow;': {
    codepoints: [8614],
    character: '↦',
  },
  '&RightTeeVector;': {
    codepoints: [10587],
    character: '⥛',
  },
  '&RightTriangle;': {
    codepoints: [8883],
    character: '⊳',
  },
  '&RightTriangleBar;': {
    codepoints: [10704],
    character: '⧐',
  },
  '&RightTriangleEqual;': {
    codepoints: [8885],
    character: '⊵',
  },
  '&RightUpDownVector;': {
    codepoints: [10575],
    character: '⥏',
  },
  '&RightUpTeeVector;': {
    codepoints: [10588],
    character: '⥜',
  },
  '&RightUpVector;': {
    codepoints: [8638],
    character: '↾',
  },
  '&RightUpVectorBar;': {
    codepoints: [10580],
    character: '⥔',
  },
  '&RightVector;': {
    codepoints: [8640],
    character: '⇀',
  },
  '&RightVectorBar;': {
    codepoints: [10579],
    character: '⥓',
  },
  '&Rightarrow;': {
    codepoints: [8658],
    character: '⇒',
  },
  '&Ropf;': {
    codepoints: [8477],
    character: 'ℝ',
  },
  '&RoundImplies;': {
    codepoints: [10608],
    character: '⥰',
  },
  '&Rrightarrow;': {
    codepoints: [8667],
    character: '⇛',
  },
  '&Rscr;': {
    codepoints: [8475],
    character: 'ℛ',
  },
  '&Rsh;': {
    codepoints: [8625],
    character: '↱',
  },
  '&RuleDelayed;': {
    codepoints: [10740],
    character: '⧴',
  },
  '&SHCHcy;': {
    codepoints: [1065],
    character: 'Щ',
  },
  '&SHcy;': {
    codepoints: [1064],
    character: 'Ш',
  },
  '&SOFTcy;': {
    codepoints: [1068],
    character: 'Ь',
  },
  '&Sacute;': {
    codepoints: [346],
    character: 'Ś',
  },
  '&Sc;': {
    codepoints: [10940],
    character: '⪼',
  },
  '&Scaron;': {
    codepoints: [352],
    character: 'Š',
  },
  '&Scedil;': {
    codepoints: [350],
    character: 'Ş',
  },
  '&Scirc;': {
    codepoints: [348],
    character: 'Ŝ',
  },
  '&Scy;': {
    codepoints: [1057],
    character: 'С',
  },
  '&Sfr;': {
    codepoints: [120086],
    character: '𝔖',
  },
  '&ShortDownArrow;': {
    codepoints: [8595],
    character: '↓',
  },
  '&ShortLeftArrow;': {
    codepoints: [8592],
    character: '←',
  },
  '&ShortRightArrow;': {
    codepoints: [8594],
    character: '→',
  },
  '&ShortUpArrow;': {
    codepoints: [8593],
    character: '↑',
  },
  '&Sigma;': {
    codepoints: [931],
    character: 'Σ',
  },
  '&SmallCircle;': {
    codepoints: [8728],
    character: '∘',
  },
  '&Sopf;': {
    codepoints: [120138],
    character: '𝕊',
  },
  '&Sqrt;': {
    codepoints: [8730],
    character: '√',
  },
  '&Square;': {
    codepoints: [9633],
    character: '□',
  },
  '&SquareIntersection;': {
    codepoints: [8851],
    character: '⊓',
  },
  '&SquareSubset;': {
    codepoints: [8847],
    character: '⊏',
  },
  '&SquareSubsetEqual;': {
    codepoints: [8849],
    character: '⊑',
  },
  '&SquareSuperset;': {
    codepoints: [8848],
    character: '⊐',
  },
  '&SquareSupersetEqual;': {
    codepoints: [8850],
    character: '⊒',
  },
  '&SquareUnion;': {
    codepoints: [8852],
    character: '⊔',
  },
  '&Sscr;': {
    codepoints: [119982],
    character: '𝒮',
  },
  '&Star;': {
    codepoints: [8902],
    character: '⋆',
  },
  '&Sub;': {
    codepoints: [8912],
    character: '⋐',
  },
  '&Subset;': {
    codepoints: [8912],
    character: '⋐',
  },
  '&SubsetEqual;': {
    codepoints: [8838],
    character: '⊆',
  },
  '&Succeeds;': {
    codepoints: [8827],
    character: '≻',
  },
  '&SucceedsEqual;': {
    codepoints: [10928],
    character: '⪰',
  },
  '&SucceedsSlantEqual;': {
    codepoints: [8829],
    character: '≽',
  },
  '&SucceedsTilde;': {
    codepoints: [8831],
    character: '≿',
  },
  '&SuchThat;': {
    codepoints: [8715],
    character: '∋',
  },
  '&Sum;': {
    codepoints: [8721],
    character: '∑',
  },
  '&Sup;': {
    codepoints: [8913],
    character: '⋑',
  },
  '&Superset;': {
    codepoints: [8835],
    character: '⊃',
  },
  '&SupersetEqual;': {
    codepoints: [8839],
    character: '⊇',
  },
  '&Supset;': {
    codepoints: [8913],
    character: '⋑',
  },
  '&THORN': {
    codepoints: [222],
    character: 'Þ',
  },
  '&THORN;': {
    codepoints: [222],
    character: 'Þ',
  },
  '&TRADE;': {
    codepoints: [8482],
    character: '™',
  },
  '&TSHcy;': {
    codepoints: [1035],
    character: 'Ћ',
  },
  '&TScy;': {
    codepoints: [1062],
    character: 'Ц',
  },
  '&Tab;': {
    codepoints: [9],
    character: '\t',
  },
  '&Tau;': {
    codepoints: [932],
    character: 'Τ',
  },
  '&Tcaron;': {
    codepoints: [356],
    character: 'Ť',
  },
  '&Tcedil;': {
    codepoints: [354],
    character: 'Ţ',
  },
  '&Tcy;': {
    codepoints: [1058],
    character: 'Т',
  },
  '&Tfr;': {
    codepoints: [120087],
    character: '𝔗',
  },
  '&Therefore;': {
    codepoints: [8756],
    character: '∴',
  },
  '&Theta;': {
    codepoints: [920],
    character: 'Θ',
  },
  '&ThickSpace;': {
    codepoints: [8287, 8202],
    character: '  ',
  },
  '&ThinSpace;': {
    codepoints: [8201],
    character: ' ',
  },
  '&Tilde;': {
    codepoints: [8764],
    character: '∼',
  },
  '&TildeEqual;': {
    codepoints: [8771],
    character: '≃',
  },
  '&TildeFullEqual;': {
    codepoints: [8773],
    character: '≅',
  },
  '&TildeTilde;': {
    codepoints: [8776],
    character: '≈',
  },
  '&Topf;': {
    codepoints: [120139],
    character: '𝕋',
  },
  '&TripleDot;': {
    codepoints: [8411],
    character: '⃛',
  },
  '&Tscr;': {
    codepoints: [119983],
    character: '𝒯',
  },
  '&Tstrok;': {
    codepoints: [358],
    character: 'Ŧ',
  },
  '&Uacute': {
    codepoints: [218],
    character: 'Ú',
  },
  '&Uacute;': {
    codepoints: [218],
    character: 'Ú',
  },
  '&Uarr;': {
    codepoints: [8607],
    character: '↟',
  },
  '&Uarrocir;': {
    codepoints: [10569],
    character: '⥉',
  },
  '&Ubrcy;': {
    codepoints: [1038],
    character: 'Ў',
  },
  '&Ubreve;': {
    codepoints: [364],
    character: 'Ŭ',
  },
  '&Ucirc': {
    codepoints: [219],
    character: 'Û',
  },
  '&Ucirc;': {
    codepoints: [219],
    character: 'Û',
  },
  '&Ucy;': {
    codepoints: [1059],
    character: 'У',
  },
  '&Udblac;': {
    codepoints: [368],
    character: 'Ű',
  },
  '&Ufr;': {
    codepoints: [120088],
    character: '𝔘',
  },
  '&Ugrave': {
    codepoints: [217],
    character: 'Ù',
  },
  '&Ugrave;': {
    codepoints: [217],
    character: 'Ù',
  },
  '&Umacr;': {
    codepoints: [362],
    character: 'Ū',
  },
  '&UnderBar;': {
    codepoints: [95],
    character: '_',
  },
  '&UnderBrace;': {
    codepoints: [9183],
    character: '⏟',
  },
  '&UnderBracket;': {
    codepoints: [9141],
    character: '⎵',
  },
  '&UnderParenthesis;': {
    codepoints: [9181],
    character: '⏝',
  },
  '&Union;': {
    codepoints: [8899],
    character: '⋃',
  },
  '&UnionPlus;': {
    codepoints: [8846],
    character: '⊎',
  },
  '&Uogon;': {
    codepoints: [370],
    character: 'Ų',
  },
  '&Uopf;': {
    codepoints: [120140],
    character: '𝕌',
  },
  '&UpArrow;': {
    codepoints: [8593],
    character: '↑',
  },
  '&UpArrowBar;': {
    codepoints: [10514],
    character: '⤒',
  },
  '&UpArrowDownArrow;': {
    codepoints: [8645],
    character: '⇅',
  },
  '&UpDownArrow;': {
    codepoints: [8597],
    character: '↕',
  },
  '&UpEquilibrium;': {
    codepoints: [10606],
    character: '⥮',
  },
  '&UpTee;': {
    codepoints: [8869],
    character: '⊥',
  },
  '&UpTeeArrow;': {
    codepoints: [8613],
    character: '↥',
  },
  '&Uparrow;': {
    codepoints: [8657],
    character: '⇑',
  },
  '&Updownarrow;': {
    codepoints: [8661],
    character: '⇕',
  },
  '&UpperLeftArrow;': {
    codepoints: [8598],
    character: '↖',
  },
  '&UpperRightArrow;': {
    codepoints: [8599],
    character: '↗',
  },
  '&Upsi;': {
    codepoints: [978],
    character: 'ϒ',
  },
  '&Upsilon;': {
    codepoints: [933],
    character: 'Υ',
  },
  '&Uring;': {
    codepoints: [366],
    character: 'Ů',
  },
  '&Uscr;': {
    codepoints: [119984],
    character: '𝒰',
  },
  '&Utilde;': {
    codepoints: [360],
    character: 'Ũ',
  },
  '&Uuml': {
    codepoints: [220],
    character: 'Ü',
  },
  '&Uuml;': {
    codepoints: [220],
    character: 'Ü',
  },
  '&VDash;': {
    codepoints: [8875],
    character: '⊫',
  },
  '&Vbar;': {
    codepoints: [10987],
    character: '⫫',
  },
  '&Vcy;': {
    codepoints: [1042],
    character: 'В',
  },
  '&Vdash;': {
    codepoints: [8873],
    character: '⊩',
  },
  '&Vdashl;': {
    codepoints: [10982],
    character: '⫦',
  },
  '&Vee;': {
    codepoints: [8897],
    character: '⋁',
  },
  '&Verbar;': {
    codepoints: [8214],
    character: '‖',
  },
  '&Vert;': {
    codepoints: [8214],
    character: '‖',
  },
  '&VerticalBar;': {
    codepoints: [8739],
    character: '∣',
  },
  '&VerticalLine;': {
    codepoints: [124],
    character: '|',
  },
  '&VerticalSeparator;': {
    codepoints: [10072],
    character: '❘',
  },
  '&VerticalTilde;': {
    codepoints: [8768],
    character: '≀',
  },
  '&VeryThinSpace;': {
    codepoints: [8202],
    character: ' ',
  },
  '&Vfr;': {
    codepoints: [120089],
    character: '𝔙',
  },
  '&Vopf;': {
    codepoints: [120141],
    character: '𝕍',
  },
  '&Vscr;': {
    codepoints: [119985],
    character: '𝒱',
  },
  '&Vvdash;': {
    codepoints: [8874],
    character: '⊪',
  },
  '&Wcirc;': {
    codepoints: [372],
    character: 'Ŵ',
  },
  '&Wedge;': {
    codepoints: [8896],
    character: '⋀',
  },
  '&Wfr;': {
    codepoints: [120090],
    character: '𝔚',
  },
  '&Wopf;': {
    codepoints: [120142],
    character: '𝕎',
  },
  '&Wscr;': {
    codepoints: [119986],
    character: '𝒲',
  },
  '&Xfr;': {
    codepoints: [120091],
    character: '𝔛',
  },
  '&Xi;': {
    codepoints: [926],
    character: 'Ξ',
  },
  '&Xopf;': {
    codepoints: [120143],
    character: '𝕏',
  },
  '&Xscr;': {
    codepoints: [119987],
    character: '𝒳',
  },
  '&YAcy;': {
    codepoints: [1071],
    character: 'Я',
  },
  '&YIcy;': {
    codepoints: [1031],
    character: 'Ї',
  },
  '&YUcy;': {
    codepoints: [1070],
    character: 'Ю',
  },
  '&Yacute': {
    codepoints: [221],
    character: 'Ý',
  },
  '&Yacute;': {
    codepoints: [221],
    character: 'Ý',
  },
  '&Ycirc;': {
    codepoints: [374],
    character: 'Ŷ',
  },
  '&Ycy;': {
    codepoints: [1067],
    character: 'Ы',
  },
  '&Yfr;': {
    codepoints: [120092],
    character: '𝔜',
  },
  '&Yopf;': {
    codepoints: [120144],
    character: '𝕐',
  },
  '&Yscr;': {
    codepoints: [119988],
    character: '𝒴',
  },
  '&Yuml;': {
    codepoints: [376],
    character: 'Ÿ',
  },
  '&ZHcy;': {
    codepoints: [1046],
    character: 'Ж',
  },
  '&Zacute;': {
    codepoints: [377],
    character: 'Ź',
  },
  '&Zcaron;': {
    codepoints: [381],
    character: 'Ž',
  },
  '&Zcy;': {
    codepoints: [1047],
    character: 'З',
  },
  '&Zdot;': {
    codepoints: [379],
    character: 'Ż',
  },
  '&ZeroWidthSpace;': {
    codepoints: [8203],
    character: '​',
  },
  '&Zeta;': {
    codepoints: [918],
    character: 'Ζ',
  },
  '&Zfr;': {
    codepoints: [8488],
    character: 'ℨ',
  },
  '&Zopf;': {
    codepoints: [8484],
    character: 'ℤ',
  },
  '&Zscr;': {
    codepoints: [119989],
    character: '𝒵',
  },
  '&aacute': {
    codepoints: [225],
    character: 'á',
  },
  '&aacute;': {
    codepoints: [225],
    character: 'á',
  },
  '&abreve;': {
    codepoints: [259],
    character: 'ă',
  },
  '&ac;': {
    codepoints: [8766],
    character: '∾',
  },
  '&acE;': {
    codepoints: [8766, 819],
    character: '∾̳',
  },
  '&acd;': {
    codepoints: [8767],
    character: '∿',
  },
  '&acirc': {
    codepoints: [226],
    character: 'â',
  },
  '&acirc;': {
    codepoints: [226],
    character: 'â',
  },
  '&acute': {
    codepoints: [180],
    character: '´',
  },
  '&acute;': {
    codepoints: [180],
    character: '´',
  },
  '&acy;': {
    codepoints: [1072],
    character: 'а',
  },
  '&aelig': {
    codepoints: [230],
    character: 'æ',
  },
  '&aelig;': {
    codepoints: [230],
    character: 'æ',
  },
  '&af;': {
    codepoints: [8289],
    character: '\u2061',
  },
  '&afr;': {
    codepoints: [120094],
    character: '𝔞',
  },
  '&agrave': {
    codepoints: [224],
    character: 'à',
  },
  '&agrave;': {
    codepoints: [224],
    character: 'à',
  },
  '&alefsym;': {
    codepoints: [8501],
    character: 'ℵ',
  },
  '&aleph;': {
    codepoints: [8501],
    character: 'ℵ',
  },
  '&alpha;': {
    codepoints: [945],
    character: 'α',
  },
  '&amacr;': {
    codepoints: [257],
    character: 'ā',
  },
  '&amalg;': {
    codepoints: [10815],
    character: '⨿',
  },
  '&amp': {
    codepoints: [38],
    character: '&',
  },
  '&amp;': {
    codepoints: [38],
    character: '&',
  },
  '&and;': {
    codepoints: [8743],
    character: '∧',
  },
  '&andand;': {
    codepoints: [10837],
    character: '⩕',
  },
  '&andd;': {
    codepoints: [10844],
    character: '⩜',
  },
  '&andslope;': {
    codepoints: [10840],
    character: '⩘',
  },
  '&andv;': {
    codepoints: [10842],
    character: '⩚',
  },
  '&ang;': {
    codepoints: [8736],
    character: '∠',
  },
  '&ange;': {
    codepoints: [10660],
    character: '⦤',
  },
  '&angle;': {
    codepoints: [8736],
    character: '∠',
  },
  '&angmsd;': {
    codepoints: [8737],
    character: '∡',
  },
  '&angmsdaa;': {
    codepoints: [10664],
    character: '⦨',
  },
  '&angmsdab;': {
    codepoints: [10665],
    character: '⦩',
  },
  '&angmsdac;': {
    codepoints: [10666],
    character: '⦪',
  },
  '&angmsdad;': {
    codepoints: [10667],
    character: '⦫',
  },
  '&angmsdae;': {
    codepoints: [10668],
    character: '⦬',
  },
  '&angmsdaf;': {
    codepoints: [10669],
    character: '⦭',
  },
  '&angmsdag;': {
    codepoints: [10670],
    character: '⦮',
  },
  '&angmsdah;': {
    codepoints: [10671],
    character: '⦯',
  },
  '&angrt;': {
    codepoints: [8735],
    character: '∟',
  },
  '&angrtvb;': {
    codepoints: [8894],
    character: '⊾',
  },
  '&angrtvbd;': {
    codepoints: [10653],
    character: '⦝',
  },
  '&angsph;': {
    codepoints: [8738],
    character: '∢',
  },
  '&angst;': {
    codepoints: [197],
    character: 'Å',
  },
  '&angzarr;': {
    codepoints: [9084],
    character: '⍼',
  },
  '&aogon;': {
    codepoints: [261],
    character: 'ą',
  },
  '&aopf;': {
    codepoints: [120146],
    character: '𝕒',
  },
  '&ap;': {
    codepoints: [8776],
    character: '≈',
  },
  '&apE;': {
    codepoints: [10864],
    character: '⩰',
  },
  '&apacir;': {
    codepoints: [10863],
    character: '⩯',
  },
  '&ape;': {
    codepoints: [8778],
    character: '≊',
  },
  '&apid;': {
    codepoints: [8779],
    character: '≋',
  },
  '&apos;': {
    codepoints: [39],
    character: '\'',
  },
  '&approx;': {
    codepoints: [8776],
    character: '≈',
  },
  '&approxeq;': {
    codepoints: [8778],
    character: '≊',
  },
  '&aring': {
    codepoints: [229],
    character: 'å',
  },
  '&aring;': {
    codepoints: [229],
    character: 'å',
  },
  '&ascr;': {
    codepoints: [119990],
    character: '𝒶',
  },
  '&ast;': {
    codepoints: [42],
    character: '*',
  },
  '&asymp;': {
    codepoints: [8776],
    character: '≈',
  },
  '&asympeq;': {
    codepoints: [8781],
    character: '≍',
  },
  '&atilde': {
    codepoints: [227],
    character: 'ã',
  },
  '&atilde;': {
    codepoints: [227],
    character: 'ã',
  },
  '&auml': {
    codepoints: [228],
    character: 'ä',
  },
  '&auml;': {
    codepoints: [228],
    character: 'ä',
  },
  '&awconint;': {
    codepoints: [8755],
    character: '∳',
  },
  '&awint;': {
    codepoints: [10769],
    character: '⨑',
  },
  '&bNot;': {
    codepoints: [10989],
    character: '⫭',
  },
  '&backcong;': {
    codepoints: [8780],
    character: '≌',
  },
  '&backepsilon;': {
    codepoints: [1014],
    character: '϶',
  },
  '&backprime;': {
    codepoints: [8245],
    character: '‵',
  },
  '&backsim;': {
    codepoints: [8765],
    character: '∽',
  },
  '&backsimeq;': {
    codepoints: [8909],
    character: '⋍',
  },
  '&barvee;': {
    codepoints: [8893],
    character: '⊽',
  },
  '&barwed;': {
    codepoints: [8965],
    character: '⌅',
  },
  '&barwedge;': {
    codepoints: [8965],
    character: '⌅',
  },
  '&bbrk;': {
    codepoints: [9141],
    character: '⎵',
  },
  '&bbrktbrk;': {
    codepoints: [9142],
    character: '⎶',
  },
  '&bcong;': {
    codepoints: [8780],
    character: '≌',
  },
  '&bcy;': {
    codepoints: [1073],
    character: 'б',
  },
  '&bdquo;': {
    codepoints: [8222],
    character: '„',
  },
  '&becaus;': {
    codepoints: [8757],
    character: '∵',
  },
  '&because;': {
    codepoints: [8757],
    character: '∵',
  },
  '&bemptyv;': {
    codepoints: [10672],
    character: '⦰',
  },
  '&bepsi;': {
    codepoints: [1014],
    character: '϶',
  },
  '&bernou;': {
    codepoints: [8492],
    character: 'ℬ',
  },
  '&beta;': {
    codepoints: [946],
    character: 'β',
  },
  '&beth;': {
    codepoints: [8502],
    character: 'ℶ',
  },
  '&between;': {
    codepoints: [8812],
    character: '≬',
  },
  '&bfr;': {
    codepoints: [120095],
    character: '𝔟',
  },
  '&bigcap;': {
    codepoints: [8898],
    character: '⋂',
  },
  '&bigcirc;': {
    codepoints: [9711],
    character: '◯',
  },
  '&bigcup;': {
    codepoints: [8899],
    character: '⋃',
  },
  '&bigodot;': {
    codepoints: [10752],
    character: '⨀',
  },
  '&bigoplus;': {
    codepoints: [10753],
    character: '⨁',
  },
  '&bigotimes;': {
    codepoints: [10754],
    character: '⨂',
  },
  '&bigsqcup;': {
    codepoints: [10758],
    character: '⨆',
  },
  '&bigstar;': {
    codepoints: [9733],
    character: '★',
  },
  '&bigtriangledown;': {
    codepoints: [9661],
    character: '▽',
  },
  '&bigtriangleup;': {
    codepoints: [9651],
    character: '△',
  },
  '&biguplus;': {
    codepoints: [10756],
    character: '⨄',
  },
  '&bigvee;': {
    codepoints: [8897],
    character: '⋁',
  },
  '&bigwedge;': {
    codepoints: [8896],
    character: '⋀',
  },
  '&bkarow;': {
    codepoints: [10509],
    character: '⤍',
  },
  '&blacklozenge;': {
    codepoints: [10731],
    character: '⧫',
  },
  '&blacksquare;': {
    codepoints: [9642],
    character: '▪',
  },
  '&blacktriangle;': {
    codepoints: [9652],
    character: '▴',
  },
  '&blacktriangledown;': {
    codepoints: [9662],
    character: '▾',
  },
  '&blacktriangleleft;': {
    codepoints: [9666],
    character: '◂',
  },
  '&blacktriangleright;': {
    codepoints: [9656],
    character: '▸',
  },
  '&blank;': {
    codepoints: [9251],
    character: '␣',
  },
  '&blk12;': {
    codepoints: [9618],
    character: '▒',
  },
  '&blk14;': {
    codepoints: [9617],
    character: '░',
  },
  '&blk34;': {
    codepoints: [9619],
    character: '▓',
  },
  '&block;': {
    codepoints: [9608],
    character: '█',
  },
  '&bne;': {
    codepoints: [61, 8421],
    character: '=⃥',
  },
  '&bnequiv;': {
    codepoints: [8801, 8421],
    character: '≡⃥',
  },
  '&bnot;': {
    codepoints: [8976],
    character: '⌐',
  },
  '&bopf;': {
    codepoints: [120147],
    character: '𝕓',
  },
  '&bot;': {
    codepoints: [8869],
    character: '⊥',
  },
  '&bottom;': {
    codepoints: [8869],
    character: '⊥',
  },
  '&bowtie;': {
    codepoints: [8904],
    character: '⋈',
  },
  '&boxDL;': {
    codepoints: [9559],
    character: '╗',
  },
  '&boxDR;': {
    codepoints: [9556],
    character: '╔',
  },
  '&boxDl;': {
    codepoints: [9558],
    character: '╖',
  },
  '&boxDr;': {
    codepoints: [9555],
    character: '╓',
  },
  '&boxH;': {
    codepoints: [9552],
    character: '═',
  },
  '&boxHD;': {
    codepoints: [9574],
    character: '╦',
  },
  '&boxHU;': {
    codepoints: [9577],
    character: '╩',
  },
  '&boxHd;': {
    codepoints: [9572],
    character: '╤',
  },
  '&boxHu;': {
    codepoints: [9575],
    character: '╧',
  },
  '&boxUL;': {
    codepoints: [9565],
    character: '╝',
  },
  '&boxUR;': {
    codepoints: [9562],
    character: '╚',
  },
  '&boxUl;': {
    codepoints: [9564],
    character: '╜',
  },
  '&boxUr;': {
    codepoints: [9561],
    character: '╙',
  },
  '&boxV;': {
    codepoints: [9553],
    character: '║',
  },
  '&boxVH;': {
    codepoints: [9580],
    character: '╬',
  },
  '&boxVL;': {
    codepoints: [9571],
    character: '╣',
  },
  '&boxVR;': {
    codepoints: [9568],
    character: '╠',
  },
  '&boxVh;': {
    codepoints: [9579],
    character: '╫',
  },
  '&boxVl;': {
    codepoints: [9570],
    character: '╢',
  },
  '&boxVr;': {
    codepoints: [9567],
    character: '╟',
  },
  '&boxbox;': {
    codepoints: [10697],
    character: '⧉',
  },
  '&boxdL;': {
    codepoints: [9557],
    character: '╕',
  },
  '&boxdR;': {
    codepoints: [9554],
    character: '╒',
  },
  '&boxdl;': {
    codepoints: [9488],
    character: '┐',
  },
  '&boxdr;': {
    codepoints: [9484],
    character: '┌',
  },
  '&boxh;': {
    codepoints: [9472],
    character: '─',
  },
  '&boxhD;': {
    codepoints: [9573],
    character: '╥',
  },
  '&boxhU;': {
    codepoints: [9576],
    character: '╨',
  },
  '&boxhd;': {
    codepoints: [9516],
    character: '┬',
  },
  '&boxhu;': {
    codepoints: [9524],
    character: '┴',
  },
  '&boxminus;': {
    codepoints: [8863],
    character: '⊟',
  },
  '&boxplus;': {
    codepoints: [8862],
    character: '⊞',
  },
  '&boxtimes;': {
    codepoints: [8864],
    character: '⊠',
  },
  '&boxuL;': {
    codepoints: [9563],
    character: '╛',
  },
  '&boxuR;': {
    codepoints: [9560],
    character: '╘',
  },
  '&boxul;': {
    codepoints: [9496],
    character: '┘',
  },
  '&boxur;': {
    codepoints: [9492],
    character: '└',
  },
  '&boxv;': {
    codepoints: [9474],
    character: '│',
  },
  '&boxvH;': {
    codepoints: [9578],
    character: '╪',
  },
  '&boxvL;': {
    codepoints: [9569],
    character: '╡',
  },
  '&boxvR;': {
    codepoints: [9566],
    character: '╞',
  },
  '&boxvh;': {
    codepoints: [9532],
    character: '┼',
  },
  '&boxvl;': {
    codepoints: [9508],
    character: '┤',
  },
  '&boxvr;': {
    codepoints: [9500],
    character: '├',
  },
  '&bprime;': {
    codepoints: [8245],
    character: '‵',
  },
  '&breve;': {
    codepoints: [728],
    character: '˘',
  },
  '&brvbar': {
    codepoints: [166],
    character: '¦',
  },
  '&brvbar;': {
    codepoints: [166],
    character: '¦',
  },
  '&bscr;': {
    codepoints: [119991],
    character: '𝒷',
  },
  '&bsemi;': {
    codepoints: [8271],
    character: '⁏',
  },
  '&bsim;': {
    codepoints: [8765],
    character: '∽',
  },
  '&bsime;': {
    codepoints: [8909],
    character: '⋍',
  },
  '&bsol;': {
    codepoints: [92],
    character: '\\',
  },
  '&bsolb;': {
    codepoints: [10693],
    character: '⧅',
  },
  '&bsolhsub;': {
    codepoints: [10184],
    character: '⟈',
  },
  '&bull;': {
    codepoints: [8226],
    character: '•',
  },
  '&bullet;': {
    codepoints: [8226],
    character: '•',
  },
  '&bump;': {
    codepoints: [8782],
    character: '≎',
  },
  '&bumpE;': {
    codepoints: [10926],
    character: '⪮',
  },
  '&bumpe;': {
    codepoints: [8783],
    character: '≏',
  },
  '&bumpeq;': {
    codepoints: [8783],
    character: '≏',
  },
  '&cacute;': {
    codepoints: [263],
    character: 'ć',
  },
  '&cap;': {
    codepoints: [8745],
    character: '∩',
  },
  '&capand;': {
    codepoints: [10820],
    character: '⩄',
  },
  '&capbrcup;': {
    codepoints: [10825],
    character: '⩉',
  },
  '&capcap;': {
    codepoints: [10827],
    character: '⩋',
  },
  '&capcup;': {
    codepoints: [10823],
    character: '⩇',
  },
  '&capdot;': {
    codepoints: [10816],
    character: '⩀',
  },
  '&caps;': {
    codepoints: [8745, 65024],
    character: '∩︀',
  },
  '&caret;': {
    codepoints: [8257],
    character: '⁁',
  },
  '&caron;': {
    codepoints: [711],
    character: 'ˇ',
  },
  '&ccaps;': {
    codepoints: [10829],
    character: '⩍',
  },
  '&ccaron;': {
    codepoints: [269],
    character: 'č',
  },
  '&ccedil': {
    codepoints: [231],
    character: 'ç',
  },
  '&ccedil;': {
    codepoints: [231],
    character: 'ç',
  },
  '&ccirc;': {
    codepoints: [265],
    character: 'ĉ',
  },
  '&ccups;': {
    codepoints: [10828],
    character: '⩌',
  },
  '&ccupssm;': {
    codepoints: [10832],
    character: '⩐',
  },
  '&cdot;': {
    codepoints: [267],
    character: 'ċ',
  },
  '&cedil': {
    codepoints: [184],
    character: '¸',
  },
  '&cedil;': {
    codepoints: [184],
    character: '¸',
  },
  '&cemptyv;': {
    codepoints: [10674],
    character: '⦲',
  },
  '&cent': {
    codepoints: [162],
    character: '¢',
  },
  '&cent;': {
    codepoints: [162],
    character: '¢',
  },
  '&centerdot;': {
    codepoints: [183],
    character: '·',
  },
  '&cfr;': {
    codepoints: [120096],
    character: '𝔠',
  },
  '&chcy;': {
    codepoints: [1095],
    character: 'ч',
  },
  '&check;': {
    codepoints: [10003],
    character: '✓',
  },
  '&checkmark;': {
    codepoints: [10003],
    character: '✓',
  },
  '&chi;': {
    codepoints: [967],
    character: 'χ',
  },
  '&cir;': {
    codepoints: [9675],
    character: '○',
  },
  '&cirE;': {
    codepoints: [10691],
    character: '⧃',
  },
  '&circ;': {
    codepoints: [710],
    character: 'ˆ',
  },
  '&circeq;': {
    codepoints: [8791],
    character: '≗',
  },
  '&circlearrowleft;': {
    codepoints: [8634],
    character: '↺',
  },
  '&circlearrowright;': {
    codepoints: [8635],
    character: '↻',
  },
  '&circledR;': {
    codepoints: [174],
    character: '®',
  },
  '&circledS;': {
    codepoints: [9416],
    character: 'Ⓢ',
  },
  '&circledast;': {
    codepoints: [8859],
    character: '⊛',
  },
  '&circledcirc;': {
    codepoints: [8858],
    character: '⊚',
  },
  '&circleddash;': {
    codepoints: [8861],
    character: '⊝',
  },
  '&cire;': {
    codepoints: [8791],
    character: '≗',
  },
  '&cirfnint;': {
    codepoints: [10768],
    character: '⨐',
  },
  '&cirmid;': {
    codepoints: [10991],
    character: '⫯',
  },
  '&cirscir;': {
    codepoints: [10690],
    character: '⧂',
  },
  '&clubs;': {
    codepoints: [9827],
    character: '♣',
  },
  '&clubsuit;': {
    codepoints: [9827],
    character: '♣',
  },
  '&colon;': {
    codepoints: [58],
    character: ':',
  },
  '&colone;': {
    codepoints: [8788],
    character: '≔',
  },
  '&coloneq;': {
    codepoints: [8788],
    character: '≔',
  },
  '&comma;': {
    codepoints: [44],
    character: ',',
  },
  '&commat;': {
    codepoints: [64],
    character: '@',
  },
  '&comp;': {
    codepoints: [8705],
    character: '∁',
  },
  '&compfn;': {
    codepoints: [8728],
    character: '∘',
  },
  '&complement;': {
    codepoints: [8705],
    character: '∁',
  },
  '&complexes;': {
    codepoints: [8450],
    character: 'ℂ',
  },
  '&cong;': {
    codepoints: [8773],
    character: '≅',
  },
  '&congdot;': {
    codepoints: [10861],
    character: '⩭',
  },
  '&conint;': {
    codepoints: [8750],
    character: '∮',
  },
  '&copf;': {
    codepoints: [120148],
    character: '𝕔',
  },
  '&coprod;': {
    codepoints: [8720],
    character: '∐',
  },
  '&copy': {
    codepoints: [169],
    character: '©',
  },
  '&copy;': {
    codepoints: [169],
    character: '©',
  },
  '&copysr;': {
    codepoints: [8471],
    character: '℗',
  },
  '&crarr;': {
    codepoints: [8629],
    character: '↵',
  },
  '&cross;': {
    codepoints: [10007],
    character: '✗',
  },
  '&cscr;': {
    codepoints: [119992],
    character: '𝒸',
  },
  '&csub;': {
    codepoints: [10959],
    character: '⫏',
  },
  '&csube;': {
    codepoints: [10961],
    character: '⫑',
  },
  '&csup;': {
    codepoints: [10960],
    character: '⫐',
  },
  '&csupe;': {
    codepoints: [10962],
    character: '⫒',
  },
  '&ctdot;': {
    codepoints: [8943],
    character: '⋯',
  },
  '&cudarrl;': {
    codepoints: [10552],
    character: '⤸',
  },
  '&cudarrr;': {
    codepoints: [10549],
    character: '⤵',
  },
  '&cuepr;': {
    codepoints: [8926],
    character: '⋞',
  },
  '&cuesc;': {
    codepoints: [8927],
    character: '⋟',
  },
  '&cularr;': {
    codepoints: [8630],
    character: '↶',
  },
  '&cularrp;': {
    codepoints: [10557],
    character: '⤽',
  },
  '&cup;': {
    codepoints: [8746],
    character: '∪',
  },
  '&cupbrcap;': {
    codepoints: [10824],
    character: '⩈',
  },
  '&cupcap;': {
    codepoints: [10822],
    character: '⩆',
  },
  '&cupcup;': {
    codepoints: [10826],
    character: '⩊',
  },
  '&cupdot;': {
    codepoints: [8845],
    character: '⊍',
  },
  '&cupor;': {
    codepoints: [10821],
    character: '⩅',
  },
  '&cups;': {
    codepoints: [8746, 65024],
    character: '∪︀',
  },
  '&curarr;': {
    codepoints: [8631],
    character: '↷',
  },
  '&curarrm;': {
    codepoints: [10556],
    character: '⤼',
  },
  '&curlyeqprec;': {
    codepoints: [8926],
    character: '⋞',
  },
  '&curlyeqsucc;': {
    codepoints: [8927],
    character: '⋟',
  },
  '&curlyvee;': {
    codepoints: [8910],
    character: '⋎',
  },
  '&curlywedge;': {
    codepoints: [8911],
    character: '⋏',
  },
  '&curren': {
    codepoints: [164],
    character: '¤',
  },
  '&curren;': {
    codepoints: [164],
    character: '¤',
  },
  '&curvearrowleft;': {
    codepoints: [8630],
    character: '↶',
  },
  '&curvearrowright;': {
    codepoints: [8631],
    character: '↷',
  },
  '&cuvee;': {
    codepoints: [8910],
    character: '⋎',
  },
  '&cuwed;': {
    codepoints: [8911],
    character: '⋏',
  },
  '&cwconint;': {
    codepoints: [8754],
    character: '∲',
  },
  '&cwint;': {
    codepoints: [8753],
    character: '∱',
  },
  '&cylcty;': {
    codepoints: [9005],
    character: '⌭',
  },
  '&dArr;': {
    codepoints: [8659],
    character: '⇓',
  },
  '&dHar;': {
    codepoints: [10597],
    character: '⥥',
  },
  '&dagger;': {
    codepoints: [8224],
    character: '†',
  },
  '&daleth;': {
    codepoints: [8504],
    character: 'ℸ',
  },
  '&darr;': {
    codepoints: [8595],
    character: '↓',
  },
  '&dash;': {
    codepoints: [8208],
    character: '‐',
  },
  '&dashv;': {
    codepoints: [8867],
    character: '⊣',
  },
  '&dbkarow;': {
    codepoints: [10511],
    character: '⤏',
  },
  '&dblac;': {
    codepoints: [733],
    character: '˝',
  },
  '&dcaron;': {
    codepoints: [271],
    character: 'ď',
  },
  '&dcy;': {
    codepoints: [1076],
    character: 'д',
  },
  '&dd;': {
    codepoints: [8518],
    character: 'ⅆ',
  },
  '&ddagger;': {
    codepoints: [8225],
    character: '‡',
  },
  '&ddarr;': {
    codepoints: [8650],
    character: '⇊',
  },
  '&ddotseq;': {
    codepoints: [10871],
    character: '⩷',
  },
  '&deg': {
    codepoints: [176],
    character: '°',
  },
  '&deg;': {
    codepoints: [176],
    character: '°',
  },
  '&delta;': {
    codepoints: [948],
    character: 'δ',
  },
  '&demptyv;': {
    codepoints: [10673],
    character: '⦱',
  },
  '&dfisht;': {
    codepoints: [10623],
    character: '⥿',
  },
  '&dfr;': {
    codepoints: [120097],
    character: '𝔡',
  },
  '&dharl;': {
    codepoints: [8643],
    character: '⇃',
  },
  '&dharr;': {
    codepoints: [8642],
    character: '⇂',
  },
  '&diam;': {
    codepoints: [8900],
    character: '⋄',
  },
  '&diamond;': {
    codepoints: [8900],
    character: '⋄',
  },
  '&diamondsuit;': {
    codepoints: [9830],
    character: '♦',
  },
  '&diams;': {
    codepoints: [9830],
    character: '♦',
  },
  '&die;': {
    codepoints: [168],
    character: '¨',
  },
  '&digamma;': {
    codepoints: [989],
    character: 'ϝ',
  },
  '&disin;': {
    codepoints: [8946],
    character: '⋲',
  },
  '&div;': {
    codepoints: [247],
    character: '÷',
  },
  '&divide': {
    codepoints: [247],
    character: '÷',
  },
  '&divide;': {
    codepoints: [247],
    character: '÷',
  },
  '&divideontimes;': {
    codepoints: [8903],
    character: '⋇',
  },
  '&divonx;': {
    codepoints: [8903],
    character: '⋇',
  },
  '&djcy;': {
    codepoints: [1106],
    character: 'ђ',
  },
  '&dlcorn;': {
    codepoints: [8990],
    character: '⌞',
  },
  '&dlcrop;': {
    codepoints: [8973],
    character: '⌍',
  },
  '&dollar;': {
    codepoints: [36],
    character: '$',
  },
  '&dopf;': {
    codepoints: [120149],
    character: '𝕕',
  },
  '&dot;': {
    codepoints: [729],
    character: '˙',
  },
  '&doteq;': {
    codepoints: [8784],
    character: '≐',
  },
  '&doteqdot;': {
    codepoints: [8785],
    character: '≑',
  },
  '&dotminus;': {
    codepoints: [8760],
    character: '∸',
  },
  '&dotplus;': {
    codepoints: [8724],
    character: '∔',
  },
  '&dotsquare;': {
    codepoints: [8865],
    character: '⊡',
  },
  '&doublebarwedge;': {
    codepoints: [8966],
    character: '⌆',
  },
  '&downarrow;': {
    codepoints: [8595],
    character: '↓',
  },
  '&downdownarrows;': {
    codepoints: [8650],
    character: '⇊',
  },
  '&downharpoonleft;': {
    codepoints: [8643],
    character: '⇃',
  },
  '&downharpoonright;': {
    codepoints: [8642],
    character: '⇂',
  },
  '&drbkarow;': {
    codepoints: [10512],
    character: '⤐',
  },
  '&drcorn;': {
    codepoints: [8991],
    character: '⌟',
  },
  '&drcrop;': {
    codepoints: [8972],
    character: '⌌',
  },
  '&dscr;': {
    codepoints: [119993],
    character: '𝒹',
  },
  '&dscy;': {
    codepoints: [1109],
    character: 'ѕ',
  },
  '&dsol;': {
    codepoints: [10742],
    character: '⧶',
  },
  '&dstrok;': {
    codepoints: [273],
    character: 'đ',
  },
  '&dtdot;': {
    codepoints: [8945],
    character: '⋱',
  },
  '&dtri;': {
    codepoints: [9663],
    character: '▿',
  },
  '&dtrif;': {
    codepoints: [9662],
    character: '▾',
  },
  '&duarr;': {
    codepoints: [8693],
    character: '⇵',
  },
  '&duhar;': {
    codepoints: [10607],
    character: '⥯',
  },
  '&dwangle;': {
    codepoints: [10662],
    character: '⦦',
  },
  '&dzcy;': {
    codepoints: [1119],
    character: 'џ',
  },
  '&dzigrarr;': {
    codepoints: [10239],
    character: '⟿',
  },
  '&eDDot;': {
    codepoints: [10871],
    character: '⩷',
  },
  '&eDot;': {
    codepoints: [8785],
    character: '≑',
  },
  '&eacute': {
    codepoints: [233],
    character: 'é',
  },
  '&eacute;': {
    codepoints: [233],
    character: 'é',
  },
  '&easter;': {
    codepoints: [10862],
    character: '⩮',
  },
  '&ecaron;': {
    codepoints: [283],
    character: 'ě',
  },
  '&ecir;': {
    codepoints: [8790],
    character: '≖',
  },
  '&ecirc': {
    codepoints: [234],
    character: 'ê',
  },
  '&ecirc;': {
    codepoints: [234],
    character: 'ê',
  },
  '&ecolon;': {
    codepoints: [8789],
    character: '≕',
  },
  '&ecy;': {
    codepoints: [1101],
    character: 'э',
  },
  '&edot;': {
    codepoints: [279],
    character: 'ė',
  },
  '&ee;': {
    codepoints: [8519],
    character: 'ⅇ',
  },
  '&efDot;': {
    codepoints: [8786],
    character: '≒',
  },
  '&efr;': {
    codepoints: [120098],
    character: '𝔢',
  },
  '&eg;': {
    codepoints: [10906],
    character: '⪚',
  },
  '&egrave': {
    codepoints: [232],
    character: 'è',
  },
  '&egrave;': {
    codepoints: [232],
    character: 'è',
  },
  '&egs;': {
    codepoints: [10902],
    character: '⪖',
  },
  '&egsdot;': {
    codepoints: [10904],
    character: '⪘',
  },
  '&el;': {
    codepoints: [10905],
    character: '⪙',
  },
  '&elinters;': {
    codepoints: [9191],
    character: '⏧',
  },
  '&ell;': {
    codepoints: [8467],
    character: 'ℓ',
  },
  '&els;': {
    codepoints: [10901],
    character: '⪕',
  },
  '&elsdot;': {
    codepoints: [10903],
    character: '⪗',
  },
  '&emacr;': {
    codepoints: [275],
    character: 'ē',
  },
  '&empty;': {
    codepoints: [8709],
    character: '∅',
  },
  '&emptyset;': {
    codepoints: [8709],
    character: '∅',
  },
  '&emptyv;': {
    codepoints: [8709],
    character: '∅',
  },
  '&emsp13;': {
    codepoints: [8196],
    character: ' ',
  },
  '&emsp14;': {
    codepoints: [8197],
    character: ' ',
  },
  '&emsp;': {
    codepoints: [8195],
    character: ' ',
  },
  '&eng;': {
    codepoints: [331],
    character: 'ŋ',
  },
  '&ensp;': {
    codepoints: [8194],
    character: ' ',
  },
  '&eogon;': {
    codepoints: [281],
    character: 'ę',
  },
  '&eopf;': {
    codepoints: [120150],
    character: '𝕖',
  },
  '&epar;': {
    codepoints: [8917],
    character: '⋕',
  },
  '&eparsl;': {
    codepoints: [10723],
    character: '⧣',
  },
  '&eplus;': {
    codepoints: [10865],
    character: '⩱',
  },
  '&epsi;': {
    codepoints: [949],
    character: 'ε',
  },
  '&epsilon;': {
    codepoints: [949],
    character: 'ε',
  },
  '&epsiv;': {
    codepoints: [1013],
    character: 'ϵ',
  },
  '&eqcirc;': {
    codepoints: [8790],
    character: '≖',
  },
  '&eqcolon;': {
    codepoints: [8789],
    character: '≕',
  },
  '&eqsim;': {
    codepoints: [8770],
    character: '≂',
  },
  '&eqslantgtr;': {
    codepoints: [10902],
    character: '⪖',
  },
  '&eqslantless;': {
    codepoints: [10901],
    character: '⪕',
  },
  '&equals;': {
    codepoints: [61],
    character: '=',
  },
  '&equest;': {
    codepoints: [8799],
    character: '≟',
  },
  '&equiv;': {
    codepoints: [8801],
    character: '≡',
  },
  '&equivDD;': {
    codepoints: [10872],
    character: '⩸',
  },
  '&eqvparsl;': {
    codepoints: [10725],
    character: '⧥',
  },
  '&erDot;': {
    codepoints: [8787],
    character: '≓',
  },
  '&erarr;': {
    codepoints: [10609],
    character: '⥱',
  },
  '&escr;': {
    codepoints: [8495],
    character: 'ℯ',
  },
  '&esdot;': {
    codepoints: [8784],
    character: '≐',
  },
  '&esim;': {
    codepoints: [8770],
    character: '≂',
  },
  '&eta;': {
    codepoints: [951],
    character: 'η',
  },
  '&eth': {
    codepoints: [240],
    character: 'ð',
  },
  '&eth;': {
    codepoints: [240],
    character: 'ð',
  },
  '&euml': {
    codepoints: [235],
    character: 'ë',
  },
  '&euml;': {
    codepoints: [235],
    character: 'ë',
  },
  '&euro;': {
    codepoints: [8364],
    character: '€',
  },
  '&excl;': {
    codepoints: [33],
    character: '!',
  },
  '&exist;': {
    codepoints: [8707],
    character: '∃',
  },
  '&expectation;': {
    codepoints: [8496],
    character: 'ℰ',
  },
  '&exponentiale;': {
    codepoints: [8519],
    character: 'ⅇ',
  },
  '&fallingdotseq;': {
    codepoints: [8786],
    character: '≒',
  },
  '&fcy;': {
    codepoints: [1092],
    character: 'ф',
  },
  '&female;': {
    codepoints: [9792],
    character: '♀',
  },
  '&ffilig;': {
    codepoints: [64259],
    character: 'ﬃ',
  },
  '&fflig;': {
    codepoints: [64256],
    character: 'ﬀ',
  },
  '&ffllig;': {
    codepoints: [64260],
    character: 'ﬄ',
  },
  '&ffr;': {
    codepoints: [120099],
    character: '𝔣',
  },
  '&filig;': {
    codepoints: [64257],
    character: 'ﬁ',
  },
  '&fjlig;': {
    codepoints: [102, 106],
    character: 'fj',
  },
  '&flat;': {
    codepoints: [9837],
    character: '♭',
  },
  '&fllig;': {
    codepoints: [64258],
    character: 'ﬂ',
  },
  '&fltns;': {
    codepoints: [9649],
    character: '▱',
  },
  '&fnof;': {
    codepoints: [402],
    character: 'ƒ',
  },
  '&fopf;': {
    codepoints: [120151],
    character: '𝕗',
  },
  '&forall;': {
    codepoints: [8704],
    character: '∀',
  },
  '&fork;': {
    codepoints: [8916],
    character: '⋔',
  },
  '&forkv;': {
    codepoints: [10969],
    character: '⫙',
  },
  '&fpartint;': {
    codepoints: [10765],
    character: '⨍',
  },
  '&frac12': {
    codepoints: [189],
    character: '½',
  },
  '&frac12;': {
    codepoints: [189],
    character: '½',
  },
  '&frac13;': {
    codepoints: [8531],
    character: '⅓',
  },
  '&frac14': {
    codepoints: [188],
    character: '¼',
  },
  '&frac14;': {
    codepoints: [188],
    character: '¼',
  },
  '&frac15;': {
    codepoints: [8533],
    character: '⅕',
  },
  '&frac16;': {
    codepoints: [8537],
    character: '⅙',
  },
  '&frac18;': {
    codepoints: [8539],
    character: '⅛',
  },
  '&frac23;': {
    codepoints: [8532],
    character: '⅔',
  },
  '&frac25;': {
    codepoints: [8534],
    character: '⅖',
  },
  '&frac34': {
    codepoints: [190],
    character: '¾',
  },
  '&frac34;': {
    codepoints: [190],
    character: '¾',
  },
  '&frac35;': {
    codepoints: [8535],
    character: '⅗',
  },
  '&frac38;': {
    codepoints: [8540],
    character: '⅜',
  },
  '&frac45;': {
    codepoints: [8536],
    character: '⅘',
  },
  '&frac56;': {
    codepoints: [8538],
    character: '⅚',
  },
  '&frac58;': {
    codepoints: [8541],
    character: '⅝',
  },
  '&frac78;': {
    codepoints: [8542],
    character: '⅞',
  },
  '&frasl;': {
    codepoints: [8260],
    character: '⁄',
  },
  '&frown;': {
    codepoints: [8994],
    character: '⌢',
  },
  '&fscr;': {
    codepoints: [119995],
    character: '𝒻',
  },
  '&gE;': {
    codepoints: [8807],
    character: '≧',
  },
  '&gEl;': {
    codepoints: [10892],
    character: '⪌',
  },
  '&gacute;': {
    codepoints: [501],
    character: 'ǵ',
  },
  '&gamma;': {
    codepoints: [947],
    character: 'γ',
  },
  '&gammad;': {
    codepoints: [989],
    character: 'ϝ',
  },
  '&gap;': {
    codepoints: [10886],
    character: '⪆',
  },
  '&gbreve;': {
    codepoints: [287],
    character: 'ğ',
  },
  '&gcirc;': {
    codepoints: [285],
    character: 'ĝ',
  },
  '&gcy;': {
    codepoints: [1075],
    character: 'г',
  },
  '&gdot;': {
    codepoints: [289],
    character: 'ġ',
  },
  '&ge;': {
    codepoints: [8805],
    character: '≥',
  },
  '&gel;': {
    codepoints: [8923],
    character: '⋛',
  },
  '&geq;': {
    codepoints: [8805],
    character: '≥',
  },
  '&geqq;': {
    codepoints: [8807],
    character: '≧',
  },
  '&geqslant;': {
    codepoints: [10878],
    character: '⩾',
  },
  '&ges;': {
    codepoints: [10878],
    character: '⩾',
  },
  '&gescc;': {
    codepoints: [10921],
    character: '⪩',
  },
  '&gesdot;': {
    codepoints: [10880],
    character: '⪀',
  },
  '&gesdoto;': {
    codepoints: [10882],
    character: '⪂',
  },
  '&gesdotol;': {
    codepoints: [10884],
    character: '⪄',
  },
  '&gesl;': {
    codepoints: [8923, 65024],
    character: '⋛︀',
  },
  '&gesles;': {
    codepoints: [10900],
    character: '⪔',
  },
  '&gfr;': {
    codepoints: [120100],
    character: '𝔤',
  },
  '&gg;': {
    codepoints: [8811],
    character: '≫',
  },
  '&ggg;': {
    codepoints: [8921],
    character: '⋙',
  },
  '&gimel;': {
    codepoints: [8503],
    character: 'ℷ',
  },
  '&gjcy;': {
    codepoints: [1107],
    character: 'ѓ',
  },
  '&gl;': {
    codepoints: [8823],
    character: '≷',
  },
  '&glE;': {
    codepoints: [10898],
    character: '⪒',
  },
  '&gla;': {
    codepoints: [10917],
    character: '⪥',
  },
  '&glj;': {
    codepoints: [10916],
    character: '⪤',
  },
  '&gnE;': {
    codepoints: [8809],
    character: '≩',
  },
  '&gnap;': {
    codepoints: [10890],
    character: '⪊',
  },
  '&gnapprox;': {
    codepoints: [10890],
    character: '⪊',
  },
  '&gne;': {
    codepoints: [10888],
    character: '⪈',
  },
  '&gneq;': {
    codepoints: [10888],
    character: '⪈',
  },
  '&gneqq;': {
    codepoints: [8809],
    character: '≩',
  },
  '&gnsim;': {
    codepoints: [8935],
    character: '⋧',
  },
  '&gopf;': {
    codepoints: [120152],
    character: '𝕘',
  },
  '&grave;': {
    codepoints: [96],
    character: '`',
  },
  '&gscr;': {
    codepoints: [8458],
    character: 'ℊ',
  },
  '&gsim;': {
    codepoints: [8819],
    character: '≳',
  },
  '&gsime;': {
    codepoints: [10894],
    character: '⪎',
  },
  '&gsiml;': {
    codepoints: [10896],
    character: '⪐',
  },
  '&gt': {
    codepoints: [62],
    character: '>',
  },
  '&gt;': {
    codepoints: [62],
    character: '>',
  },
  '&gtcc;': {
    codepoints: [10919],
    character: '⪧',
  },
  '&gtcir;': {
    codepoints: [10874],
    character: '⩺',
  },
  '&gtdot;': {
    codepoints: [8919],
    character: '⋗',
  },
  '&gtlPar;': {
    codepoints: [10645],
    character: '⦕',
  },
  '&gtquest;': {
    codepoints: [10876],
    character: '⩼',
  },
  '&gtrapprox;': {
    codepoints: [10886],
    character: '⪆',
  },
  '&gtrarr;': {
    codepoints: [10616],
    character: '⥸',
  },
  '&gtrdot;': {
    codepoints: [8919],
    character: '⋗',
  },
  '&gtreqless;': {
    codepoints: [8923],
    character: '⋛',
  },
  '&gtreqqless;': {
    codepoints: [10892],
    character: '⪌',
  },
  '&gtrless;': {
    codepoints: [8823],
    character: '≷',
  },
  '&gtrsim;': {
    codepoints: [8819],
    character: '≳',
  },
  '&gvertneqq;': {
    codepoints: [8809, 65024],
    character: '≩︀',
  },
  '&gvnE;': {
    codepoints: [8809, 65024],
    character: '≩︀',
  },
  '&hArr;': {
    codepoints: [8660],
    character: '⇔',
  },
  '&hairsp;': {
    codepoints: [8202],
    character: ' ',
  },
  '&half;': {
    codepoints: [189],
    character: '½',
  },
  '&hamilt;': {
    codepoints: [8459],
    character: 'ℋ',
  },
  '&hardcy;': {
    codepoints: [1098],
    character: 'ъ',
  },
  '&harr;': {
    codepoints: [8596],
    character: '↔',
  },
  '&harrcir;': {
    codepoints: [10568],
    character: '⥈',
  },
  '&harrw;': {
    codepoints: [8621],
    character: '↭',
  },
  '&hbar;': {
    codepoints: [8463],
    character: 'ℏ',
  },
  '&hcirc;': {
    codepoints: [293],
    character: 'ĥ',
  },
  '&hearts;': {
    codepoints: [9829],
    character: '♥',
  },
  '&heartsuit;': {
    codepoints: [9829],
    character: '♥',
  },
  '&hellip;': {
    codepoints: [8230],
    character: '…',
  },
  '&hercon;': {
    codepoints: [8889],
    character: '⊹',
  },
  '&hfr;': {
    codepoints: [120101],
    character: '𝔥',
  },
  '&hksearow;': {
    codepoints: [10533],
    character: '⤥',
  },
  '&hkswarow;': {
    codepoints: [10534],
    character: '⤦',
  },
  '&hoarr;': {
    codepoints: [8703],
    character: '⇿',
  },
  '&homtht;': {
    codepoints: [8763],
    character: '∻',
  },
  '&hookleftarrow;': {
    codepoints: [8617],
    character: '↩',
  },
  '&hookrightarrow;': {
    codepoints: [8618],
    character: '↪',
  },
  '&hopf;': {
    codepoints: [120153],
    character: '𝕙',
  },
  '&horbar;': {
    codepoints: [8213],
    character: '―',
  },
  '&hscr;': {
    codepoints: [119997],
    character: '𝒽',
  },
  '&hslash;': {
    codepoints: [8463],
    character: 'ℏ',
  },
  '&hstrok;': {
    codepoints: [295],
    character: 'ħ',
  },
  '&hybull;': {
    codepoints: [8259],
    character: '⁃',
  },
  '&hyphen;': {
    codepoints: [8208],
    character: '‐',
  },
  '&iacute': {
    codepoints: [237],
    character: 'í',
  },
  '&iacute;': {
    codepoints: [237],
    character: 'í',
  },
  '&ic;': {
    codepoints: [8291],
    character: '\u2063',
  },
  '&icirc': {
    codepoints: [238],
    character: 'î',
  },
  '&icirc;': {
    codepoints: [238],
    character: 'î',
  },
  '&icy;': {
    codepoints: [1080],
    character: 'и',
  },
  '&iecy;': {
    codepoints: [1077],
    character: 'е',
  },
  '&iexcl': {
    codepoints: [161],
    character: '¡',
  },
  '&iexcl;': {
    codepoints: [161],
    character: '¡',
  },
  '&iff;': {
    codepoints: [8660],
    character: '⇔',
  },
  '&ifr;': {
    codepoints: [120102],
    character: '𝔦',
  },
  '&igrave': {
    codepoints: [236],
    character: 'ì',
  },
  '&igrave;': {
    codepoints: [236],
    character: 'ì',
  },
  '&ii;': {
    codepoints: [8520],
    character: 'ⅈ',
  },
  '&iiiint;': {
    codepoints: [10764],
    character: '⨌',
  },
  '&iiint;': {
    codepoints: [8749],
    character: '∭',
  },
  '&iinfin;': {
    codepoints: [10716],
    character: '⧜',
  },
  '&iiota;': {
    codepoints: [8489],
    character: '℩',
  },
  '&ijlig;': {
    codepoints: [307],
    character: 'ĳ',
  },
  '&imacr;': {
    codepoints: [299],
    character: 'ī',
  },
  '&image;': {
    codepoints: [8465],
    character: 'ℑ',
  },
  '&imagline;': {
    codepoints: [8464],
    character: 'ℐ',
  },
  '&imagpart;': {
    codepoints: [8465],
    character: 'ℑ',
  },
  '&imath;': {
    codepoints: [305],
    character: 'ı',
  },
  '&imof;': {
    codepoints: [8887],
    character: '⊷',
  },
  '&imped;': {
    codepoints: [437],
    character: 'Ƶ',
  },
  '&in;': {
    codepoints: [8712],
    character: '∈',
  },
  '&incare;': {
    codepoints: [8453],
    character: '℅',
  },
  '&infin;': {
    codepoints: [8734],
    character: '∞',
  },
  '&infintie;': {
    codepoints: [10717],
    character: '⧝',
  },
  '&inodot;': {
    codepoints: [305],
    character: 'ı',
  },
  '&int;': {
    codepoints: [8747],
    character: '∫',
  },
  '&intcal;': {
    codepoints: [8890],
    character: '⊺',
  },
  '&integers;': {
    codepoints: [8484],
    character: 'ℤ',
  },
  '&intercal;': {
    codepoints: [8890],
    character: '⊺',
  },
  '&intlarhk;': {
    codepoints: [10775],
    character: '⨗',
  },
  '&intprod;': {
    codepoints: [10812],
    character: '⨼',
  },
  '&iocy;': {
    codepoints: [1105],
    character: 'ё',
  },
  '&iogon;': {
    codepoints: [303],
    character: 'į',
  },
  '&iopf;': {
    codepoints: [120154],
    character: '𝕚',
  },
  '&iota;': {
    codepoints: [953],
    character: 'ι',
  },
  '&iprod;': {
    codepoints: [10812],
    character: '⨼',
  },
  '&iquest': {
    codepoints: [191],
    character: '¿',
  },
  '&iquest;': {
    codepoints: [191],
    character: '¿',
  },
  '&iscr;': {
    codepoints: [119998],
    character: '𝒾',
  },
  '&isin;': {
    codepoints: [8712],
    character: '∈',
  },
  '&isinE;': {
    codepoints: [8953],
    character: '⋹',
  },
  '&isindot;': {
    codepoints: [8949],
    character: '⋵',
  },
  '&isins;': {
    codepoints: [8948],
    character: '⋴',
  },
  '&isinsv;': {
    codepoints: [8947],
    character: '⋳',
  },
  '&isinv;': {
    codepoints: [8712],
    character: '∈',
  },
  '&it;': {
    codepoints: [8290],
    character: '\u2062',
  },
  '&itilde;': {
    codepoints: [297],
    character: 'ĩ',
  },
  '&iukcy;': {
    codepoints: [1110],
    character: 'і',
  },
  '&iuml': {
    codepoints: [239],
    character: 'ï',
  },
  '&iuml;': {
    codepoints: [239],
    character: 'ï',
  },
  '&jcirc;': {
    codepoints: [309],
    character: 'ĵ',
  },
  '&jcy;': {
    codepoints: [1081],
    character: 'й',
  },
  '&jfr;': {
    codepoints: [120103],
    character: '𝔧',
  },
  '&jmath;': {
    codepoints: [567],
    character: 'ȷ',
  },
  '&jopf;': {
    codepoints: [120155],
    character: '𝕛',
  },
  '&jscr;': {
    codepoints: [119999],
    character: '𝒿',
  },
  '&jsercy;': {
    codepoints: [1112],
    character: 'ј',
  },
  '&jukcy;': {
    codepoints: [1108],
    character: 'є',
  },
  '&kappa;': {
    codepoints: [954],
    character: 'κ',
  },
  '&kappav;': {
    codepoints: [1008],
    character: 'ϰ',
  },
  '&kcedil;': {
    codepoints: [311],
    character: 'ķ',
  },
  '&kcy;': {
    codepoints: [1082],
    character: 'к',
  },
  '&kfr;': {
    codepoints: [120104],
    character: '𝔨',
  },
  '&kgreen;': {
    codepoints: [312],
    character: 'ĸ',
  },
  '&khcy;': {
    codepoints: [1093],
    character: 'х',
  },
  '&kjcy;': {
    codepoints: [1116],
    character: 'ќ',
  },
  '&kopf;': {
    codepoints: [120156],
    character: '𝕜',
  },
  '&kscr;': {
    codepoints: [120000],
    character: '𝓀',
  },
  '&lAarr;': {
    codepoints: [8666],
    character: '⇚',
  },
  '&lArr;': {
    codepoints: [8656],
    character: '⇐',
  },
  '&lAtail;': {
    codepoints: [10523],
    character: '⤛',
  },
  '&lBarr;': {
    codepoints: [10510],
    character: '⤎',
  },
  '&lE;': {
    codepoints: [8806],
    character: '≦',
  },
  '&lEg;': {
    codepoints: [10891],
    character: '⪋',
  },
  '&lHar;': {
    codepoints: [10594],
    character: '⥢',
  },
  '&lacute;': {
    codepoints: [314],
    character: 'ĺ',
  },
  '&laemptyv;': {
    codepoints: [10676],
    character: '⦴',
  },
  '&lagran;': {
    codepoints: [8466],
    character: 'ℒ',
  },
  '&lambda;': {
    codepoints: [955],
    character: 'λ',
  },
  '&lang;': {
    codepoints: [10216],
    character: '⟨',
  },
  '&langd;': {
    codepoints: [10641],
    character: '⦑',
  },
  '&langle;': {
    codepoints: [10216],
    character: '⟨',
  },
  '&lap;': {
    codepoints: [10885],
    character: '⪅',
  },
  '&laquo': {
    codepoints: [171],
    character: '«',
  },
  '&laquo;': {
    codepoints: [171],
    character: '«',
  },
  '&larr;': {
    codepoints: [8592],
    character: '←',
  },
  '&larrb;': {
    codepoints: [8676],
    character: '⇤',
  },
  '&larrbfs;': {
    codepoints: [10527],
    character: '⤟',
  },
  '&larrfs;': {
    codepoints: [10525],
    character: '⤝',
  },
  '&larrhk;': {
    codepoints: [8617],
    character: '↩',
  },
  '&larrlp;': {
    codepoints: [8619],
    character: '↫',
  },
  '&larrpl;': {
    codepoints: [10553],
    character: '⤹',
  },
  '&larrsim;': {
    codepoints: [10611],
    character: '⥳',
  },
  '&larrtl;': {
    codepoints: [8610],
    character: '↢',
  },
  '&lat;': {
    codepoints: [10923],
    character: '⪫',
  },
  '&latail;': {
    codepoints: [10521],
    character: '⤙',
  },
  '&late;': {
    codepoints: [10925],
    character: '⪭',
  },
  '&lates;': {
    codepoints: [10925, 65024],
    character: '⪭︀',
  },
  '&lbarr;': {
    codepoints: [10508],
    character: '⤌',
  },
  '&lbbrk;': {
    codepoints: [10098],
    character: '❲',
  },
  '&lbrace;': {
    codepoints: [123],
    character: '{',
  },
  '&lbrack;': {
    codepoints: [91],
    character: '[',
  },
  '&lbrke;': {
    codepoints: [10635],
    character: '⦋',
  },
  '&lbrksld;': {
    codepoints: [10639],
    character: '⦏',
  },
  '&lbrkslu;': {
    codepoints: [10637],
    character: '⦍',
  },
  '&lcaron;': {
    codepoints: [318],
    character: 'ľ',
  },
  '&lcedil;': {
    codepoints: [316],
    character: 'ļ',
  },
  '&lceil;': {
    codepoints: [8968],
    character: '⌈',
  },
  '&lcub;': {
    codepoints: [123],
    character: '{',
  },
  '&lcy;': {
    codepoints: [1083],
    character: 'л',
  },
  '&ldca;': {
    codepoints: [10550],
    character: '⤶',
  },
  '&ldquo;': {
    codepoints: [8220],
    character: '“',
  },
  '&ldquor;': {
    codepoints: [8222],
    character: '„',
  },
  '&ldrdhar;': {
    codepoints: [10599],
    character: '⥧',
  },
  '&ldrushar;': {
    codepoints: [10571],
    character: '⥋',
  },
  '&ldsh;': {
    codepoints: [8626],
    character: '↲',
  },
  '&le;': {
    codepoints: [8804],
    character: '≤',
  },
  '&leftarrow;': {
    codepoints: [8592],
    character: '←',
  },
  '&leftarrowtail;': {
    codepoints: [8610],
    character: '↢',
  },
  '&leftharpoondown;': {
    codepoints: [8637],
    character: '↽',
  },
  '&leftharpoonup;': {
    codepoints: [8636],
    character: '↼',
  },
  '&leftleftarrows;': {
    codepoints: [8647],
    character: '⇇',
  },
  '&leftrightarrow;': {
    codepoints: [8596],
    character: '↔',
  },
  '&leftrightarrows;': {
    codepoints: [8646],
    character: '⇆',
  },
  '&leftrightharpoons;': {
    codepoints: [8651],
    character: '⇋',
  },
  '&leftrightsquigarrow;': {
    codepoints: [8621],
    character: '↭',
  },
  '&leftthreetimes;': {
    codepoints: [8907],
    character: '⋋',
  },
  '&leg;': {
    codepoints: [8922],
    character: '⋚',
  },
  '&leq;': {
    codepoints: [8804],
    character: '≤',
  },
  '&leqq;': {
    codepoints: [8806],
    character: '≦',
  },
  '&leqslant;': {
    codepoints: [10877],
    character: '⩽',
  },
  '&les;': {
    codepoints: [10877],
    character: '⩽',
  },
  '&lescc;': {
    codepoints: [10920],
    character: '⪨',
  },
  '&lesdot;': {
    codepoints: [10879],
    character: '⩿',
  },
  '&lesdoto;': {
    codepoints: [10881],
    character: '⪁',
  },
  '&lesdotor;': {
    codepoints: [10883],
    character: '⪃',
  },
  '&lesg;': {
    codepoints: [8922, 65024],
    character: '⋚︀',
  },
  '&lesges;': {
    codepoints: [10899],
    character: '⪓',
  },
  '&lessapprox;': {
    codepoints: [10885],
    character: '⪅',
  },
  '&lessdot;': {
    codepoints: [8918],
    character: '⋖',
  },
  '&lesseqgtr;': {
    codepoints: [8922],
    character: '⋚',
  },
  '&lesseqqgtr;': {
    codepoints: [10891],
    character: '⪋',
  },
  '&lessgtr;': {
    codepoints: [8822],
    character: '≶',
  },
  '&lesssim;': {
    codepoints: [8818],
    character: '≲',
  },
  '&lfisht;': {
    codepoints: [10620],
    character: '⥼',
  },
  '&lfloor;': {
    codepoints: [8970],
    character: '⌊',
  },
  '&lfr;': {
    codepoints: [120105],
    character: '𝔩',
  },
  '&lg;': {
    codepoints: [8822],
    character: '≶',
  },
  '&lgE;': {
    codepoints: [10897],
    character: '⪑',
  },
  '&lhard;': {
    codepoints: [8637],
    character: '↽',
  },
  '&lharu;': {
    codepoints: [8636],
    character: '↼',
  },
  '&lharul;': {
    codepoints: [10602],
    character: '⥪',
  },
  '&lhblk;': {
    codepoints: [9604],
    character: '▄',
  },
  '&ljcy;': {
    codepoints: [1113],
    character: 'љ',
  },
  '&ll;': {
    codepoints: [8810],
    character: '≪',
  },
  '&llarr;': {
    codepoints: [8647],
    character: '⇇',
  },
  '&llcorner;': {
    codepoints: [8990],
    character: '⌞',
  },
  '&llhard;': {
    codepoints: [10603],
    character: '⥫',
  },
  '&lltri;': {
    codepoints: [9722],
    character: '◺',
  },
  '&lmidot;': {
    codepoints: [320],
    character: 'ŀ',
  },
  '&lmoust;': {
    codepoints: [9136],
    character: '⎰',
  },
  '&lmoustache;': {
    codepoints: [9136],
    character: '⎰',
  },
  '&lnE;': {
    codepoints: [8808],
    character: '≨',
  },
  '&lnap;': {
    codepoints: [10889],
    character: '⪉',
  },
  '&lnapprox;': {
    codepoints: [10889],
    character: '⪉',
  },
  '&lne;': {
    codepoints: [10887],
    character: '⪇',
  },
  '&lneq;': {
    codepoints: [10887],
    character: '⪇',
  },
  '&lneqq;': {
    codepoints: [8808],
    character: '≨',
  },
  '&lnsim;': {
    codepoints: [8934],
    character: '⋦',
  },
  '&loang;': {
    codepoints: [10220],
    character: '⟬',
  },
  '&loarr;': {
    codepoints: [8701],
    character: '⇽',
  },
  '&lobrk;': {
    codepoints: [10214],
    character: '⟦',
  },
  '&longleftarrow;': {
    codepoints: [10229],
    character: '⟵',
  },
  '&longleftrightarrow;': {
    codepoints: [10231],
    character: '⟷',
  },
  '&longmapsto;': {
    codepoints: [10236],
    character: '⟼',
  },
  '&longrightarrow;': {
    codepoints: [10230],
    character: '⟶',
  },
  '&looparrowleft;': {
    codepoints: [8619],
    character: '↫',
  },
  '&looparrowright;': {
    codepoints: [8620],
    character: '↬',
  },
  '&lopar;': {
    codepoints: [10629],
    character: '⦅',
  },
  '&lopf;': {
    codepoints: [120157],
    character: '𝕝',
  },
  '&loplus;': {
    codepoints: [10797],
    character: '⨭',
  },
  '&lotimes;': {
    codepoints: [10804],
    character: '⨴',
  },
  '&lowast;': {
    codepoints: [8727],
    character: '∗',
  },
  '&lowbar;': {
    codepoints: [95],
    character: '_',
  },
  '&loz;': {
    codepoints: [9674],
    character: '◊',
  },
  '&lozenge;': {
    codepoints: [9674],
    character: '◊',
  },
  '&lozf;': {
    codepoints: [10731],
    character: '⧫',
  },
  '&lpar;': {
    codepoints: [40],
    character: '(',
  },
  '&lparlt;': {
    codepoints: [10643],
    character: '⦓',
  },
  '&lrarr;': {
    codepoints: [8646],
    character: '⇆',
  },
  '&lrcorner;': {
    codepoints: [8991],
    character: '⌟',
  },
  '&lrhar;': {
    codepoints: [8651],
    character: '⇋',
  },
  '&lrhard;': {
    codepoints: [10605],
    character: '⥭',
  },
  '&lrm;': {
    codepoints: [8206],
    character: '\u200E',
  },
  '&lrtri;': {
    codepoints: [8895],
    character: '⊿',
  },
  '&lsaquo;': {
    codepoints: [8249],
    character: '‹',
  },
  '&lscr;': {
    codepoints: [120001],
    character: '𝓁',
  },
  '&lsh;': {
    codepoints: [8624],
    character: '↰',
  },
  '&lsim;': {
    codepoints: [8818],
    character: '≲',
  },
  '&lsime;': {
    codepoints: [10893],
    character: '⪍',
  },
  '&lsimg;': {
    codepoints: [10895],
    character: '⪏',
  },
  '&lsqb;': {
    codepoints: [91],
    character: '[',
  },
  '&lsquo;': {
    codepoints: [8216],
    character: '‘',
  },
  '&lsquor;': {
    codepoints: [8218],
    character: '‚',
  },
  '&lstrok;': {
    codepoints: [322],
    character: 'ł',
  },
  '&lt': {
    codepoints: [60],
    character: '<',
  },
  '&lt;': {
    codepoints: [60],
    character: '<',
  },
  '&ltcc;': {
    codepoints: [10918],
    character: '⪦',
  },
  '&ltcir;': {
    codepoints: [10873],
    character: '⩹',
  },
  '&ltdot;': {
    codepoints: [8918],
    character: '⋖',
  },
  '&lthree;': {
    codepoints: [8907],
    character: '⋋',
  },
  '&ltimes;': {
    codepoints: [8905],
    character: '⋉',
  },
  '&ltlarr;': {
    codepoints: [10614],
    character: '⥶',
  },
  '&ltquest;': {
    codepoints: [10875],
    character: '⩻',
  },
  '&ltrPar;': {
    codepoints: [10646],
    character: '⦖',
  },
  '&ltri;': {
    codepoints: [9667],
    character: '◃',
  },
  '&ltrie;': {
    codepoints: [8884],
    character: '⊴',
  },
  '&ltrif;': {
    codepoints: [9666],
    character: '◂',
  },
  '&lurdshar;': {
    codepoints: [10570],
    character: '⥊',
  },
  '&luruhar;': {
    codepoints: [10598],
    character: '⥦',
  },
  '&lvertneqq;': {
    codepoints: [8808, 65024],
    character: '≨︀',
  },
  '&lvnE;': {
    codepoints: [8808, 65024],
    character: '≨︀',
  },
  '&mDDot;': {
    codepoints: [8762],
    character: '∺',
  },
  '&macr': {
    codepoints: [175],
    character: '¯',
  },
  '&macr;': {
    codepoints: [175],
    character: '¯',
  },
  '&male;': {
    codepoints: [9794],
    character: '♂',
  },
  '&malt;': {
    codepoints: [10016],
    character: '✠',
  },
  '&maltese;': {
    codepoints: [10016],
    character: '✠',
  },
  '&map;': {
    codepoints: [8614],
    character: '↦',
  },
  '&mapsto;': {
    codepoints: [8614],
    character: '↦',
  },
  '&mapstodown;': {
    codepoints: [8615],
    character: '↧',
  },
  '&mapstoleft;': {
    codepoints: [8612],
    character: '↤',
  },
  '&mapstoup;': {
    codepoints: [8613],
    character: '↥',
  },
  '&marker;': {
    codepoints: [9646],
    character: '▮',
  },
  '&mcomma;': {
    codepoints: [10793],
    character: '⨩',
  },
  '&mcy;': {
    codepoints: [1084],
    character: 'м',
  },
  '&mdash;': {
    codepoints: [8212],
    character: '—',
  },
  '&measuredangle;': {
    codepoints: [8737],
    character: '∡',
  },
  '&mfr;': {
    codepoints: [120106],
    character: '𝔪',
  },
  '&mho;': {
    codepoints: [8487],
    character: '℧',
  },
  '&micro': {
    codepoints: [181],
    character: 'µ',
  },
  '&micro;': {
    codepoints: [181],
    character: 'µ',
  },
  '&mid;': {
    codepoints: [8739],
    character: '∣',
  },
  '&midast;': {
    codepoints: [42],
    character: '*',
  },
  '&midcir;': {
    codepoints: [10992],
    character: '⫰',
  },
  '&middot': {
    codepoints: [183],
    character: '·',
  },
  '&middot;': {
    codepoints: [183],
    character: '·',
  },
  '&minus;': {
    codepoints: [8722],
    character: '−',
  },
  '&minusb;': {
    codepoints: [8863],
    character: '⊟',
  },
  '&minusd;': {
    codepoints: [8760],
    character: '∸',
  },
  '&minusdu;': {
    codepoints: [10794],
    character: '⨪',
  },
  '&mlcp;': {
    codepoints: [10971],
    character: '⫛',
  },
  '&mldr;': {
    codepoints: [8230],
    character: '…',
  },
  '&mnplus;': {
    codepoints: [8723],
    character: '∓',
  },
  '&models;': {
    codepoints: [8871],
    character: '⊧',
  },
  '&mopf;': {
    codepoints: [120158],
    character: '𝕞',
  },
  '&mp;': {
    codepoints: [8723],
    character: '∓',
  },
  '&mscr;': {
    codepoints: [120002],
    character: '𝓂',
  },
  '&mstpos;': {
    codepoints: [8766],
    character: '∾',
  },
  '&mu;': {
    codepoints: [956],
    character: 'μ',
  },
  '&multimap;': {
    codepoints: [8888],
    character: '⊸',
  },
  '&mumap;': {
    codepoints: [8888],
    character: '⊸',
  },
  '&nGg;': {
    codepoints: [8921, 824],
    character: '⋙̸',
  },
  '&nGt;': {
    codepoints: [8811, 8402],
    character: '≫⃒',
  },
  '&nGtv;': {
    codepoints: [8811, 824],
    character: '≫̸',
  },
  '&nLeftarrow;': {
    codepoints: [8653],
    character: '⇍',
  },
  '&nLeftrightarrow;': {
    codepoints: [8654],
    character: '⇎',
  },
  '&nLl;': {
    codepoints: [8920, 824],
    character: '⋘̸',
  },
  '&nLt;': {
    codepoints: [8810, 8402],
    character: '≪⃒',
  },
  '&nLtv;': {
    codepoints: [8810, 824],
    character: '≪̸',
  },
  '&nRightarrow;': {
    codepoints: [8655],
    character: '⇏',
  },
  '&nVDash;': {
    codepoints: [8879],
    character: '⊯',
  },
  '&nVdash;': {
    codepoints: [8878],
    character: '⊮',
  },
  '&nabla;': {
    codepoints: [8711],
    character: '∇',
  },
  '&nacute;': {
    codepoints: [324],
    character: 'ń',
  },
  '&nang;': {
    codepoints: [8736, 8402],
    character: '∠⃒',
  },
  '&nap;': {
    codepoints: [8777],
    character: '≉',
  },
  '&napE;': {
    codepoints: [10864, 824],
    character: '⩰̸',
  },
  '&napid;': {
    codepoints: [8779, 824],
    character: '≋̸',
  },
  '&napos;': {
    codepoints: [329],
    character: 'ŉ',
  },
  '&napprox;': {
    codepoints: [8777],
    character: '≉',
  },
  '&natur;': {
    codepoints: [9838],
    character: '♮',
  },
  '&natural;': {
    codepoints: [9838],
    character: '♮',
  },
  '&naturals;': {
    codepoints: [8469],
    character: 'ℕ',
  },
  '&nbsp': {
    codepoints: [160],
    character: ' ',
  },
  '&nbsp;': {
    codepoints: [160],
    character: ' ',
  },
  '&nbump;': {
    codepoints: [8782, 824],
    character: '≎̸',
  },
  '&nbumpe;': {
    codepoints: [8783, 824],
    character: '≏̸',
  },
  '&ncap;': {
    codepoints: [10819],
    character: '⩃',
  },
  '&ncaron;': {
    codepoints: [328],
    character: 'ň',
  },
  '&ncedil;': {
    codepoints: [326],
    character: 'ņ',
  },
  '&ncong;': {
    codepoints: [8775],
    character: '≇',
  },
  '&ncongdot;': {
    codepoints: [10861, 824],
    character: '⩭̸',
  },
  '&ncup;': {
    codepoints: [10818],
    character: '⩂',
  },
  '&ncy;': {
    codepoints: [1085],
    character: 'н',
  },
  '&ndash;': {
    codepoints: [8211],
    character: '–',
  },
  '&ne;': {
    codepoints: [8800],
    character: '≠',
  },
  '&neArr;': {
    codepoints: [8663],
    character: '⇗',
  },
  '&nearhk;': {
    codepoints: [10532],
    character: '⤤',
  },
  '&nearr;': {
    codepoints: [8599],
    character: '↗',
  },
  '&nearrow;': {
    codepoints: [8599],
    character: '↗',
  },
  '&nedot;': {
    codepoints: [8784, 824],
    character: '≐̸',
  },
  '&nequiv;': {
    codepoints: [8802],
    character: '≢',
  },
  '&nesear;': {
    codepoints: [10536],
    character: '⤨',
  },
  '&nesim;': {
    codepoints: [8770, 824],
    character: '≂̸',
  },
  '&nexist;': {
    codepoints: [8708],
    character: '∄',
  },
  '&nexists;': {
    codepoints: [8708],
    character: '∄',
  },
  '&nfr;': {
    codepoints: [120107],
    character: '𝔫',
  },
  '&ngE;': {
    codepoints: [8807, 824],
    character: '≧̸',
  },
  '&nge;': {
    codepoints: [8817],
    character: '≱',
  },
  '&ngeq;': {
    codepoints: [8817],
    character: '≱',
  },
  '&ngeqq;': {
    codepoints: [8807, 824],
    character: '≧̸',
  },
  '&ngeqslant;': {
    codepoints: [10878, 824],
    character: '⩾̸',
  },
  '&nges;': {
    codepoints: [10878, 824],
    character: '⩾̸',
  },
  '&ngsim;': {
    codepoints: [8821],
    character: '≵',
  },
  '&ngt;': {
    codepoints: [8815],
    character: '≯',
  },
  '&ngtr;': {
    codepoints: [8815],
    character: '≯',
  },
  '&nhArr;': {
    codepoints: [8654],
    character: '⇎',
  },
  '&nharr;': {
    codepoints: [8622],
    character: '↮',
  },
  '&nhpar;': {
    codepoints: [10994],
    character: '⫲',
  },
  '&ni;': {
    codepoints: [8715],
    character: '∋',
  },
  '&nis;': {
    codepoints: [8956],
    character: '⋼',
  },
  '&nisd;': {
    codepoints: [8954],
    character: '⋺',
  },
  '&niv;': {
    codepoints: [8715],
    character: '∋',
  },
  '&njcy;': {
    codepoints: [1114],
    character: 'њ',
  },
  '&nlArr;': {
    codepoints: [8653],
    character: '⇍',
  },
  '&nlE;': {
    codepoints: [8806, 824],
    character: '≦̸',
  },
  '&nlarr;': {
    codepoints: [8602],
    character: '↚',
  },
  '&nldr;': {
    codepoints: [8229],
    character: '‥',
  },
  '&nle;': {
    codepoints: [8816],
    character: '≰',
  },
  '&nleftarrow;': {
    codepoints: [8602],
    character: '↚',
  },
  '&nleftrightarrow;': {
    codepoints: [8622],
    character: '↮',
  },
  '&nleq;': {
    codepoints: [8816],
    character: '≰',
  },
  '&nleqq;': {
    codepoints: [8806, 824],
    character: '≦̸',
  },
  '&nleqslant;': {
    codepoints: [10877, 824],
    character: '⩽̸',
  },
  '&nles;': {
    codepoints: [10877, 824],
    character: '⩽̸',
  },
  '&nless;': {
    codepoints: [8814],
    character: '≮',
  },
  '&nlsim;': {
    codepoints: [8820],
    character: '≴',
  },
  '&nlt;': {
    codepoints: [8814],
    character: '≮',
  },
  '&nltri;': {
    codepoints: [8938],
    character: '⋪',
  },
  '&nltrie;': {
    codepoints: [8940],
    character: '⋬',
  },
  '&nmid;': {
    codepoints: [8740],
    character: '∤',
  },
  '&nopf;': {
    codepoints: [120159],
    character: '𝕟',
  },
  '&not': {
    codepoints: [172],
    character: '¬',
  },
  '&not;': {
    codepoints: [172],
    character: '¬',
  },
  '&notin;': {
    codepoints: [8713],
    character: '∉',
  },
  '&notinE;': {
    codepoints: [8953, 824],
    character: '⋹̸',
  },
  '&notindot;': {
    codepoints: [8949, 824],
    character: '⋵̸',
  },
  '&notinva;': {
    codepoints: [8713],
    character: '∉',
  },
  '&notinvb;': {
    codepoints: [8951],
    character: '⋷',
  },
  '&notinvc;': {
    codepoints: [8950],
    character: '⋶',
  },
  '&notni;': {
    codepoints: [8716],
    character: '∌',
  },
  '&notniva;': {
    codepoints: [8716],
    character: '∌',
  },
  '&notnivb;': {
    codepoints: [8958],
    character: '⋾',
  },
  '&notnivc;': {
    codepoints: [8957],
    character: '⋽',
  },
  '&npar;': {
    codepoints: [8742],
    character: '∦',
  },
  '&nparallel;': {
    codepoints: [8742],
    character: '∦',
  },
  '&nparsl;': {
    codepoints: [11005, 8421],
    character: '⫽⃥',
  },
  '&npart;': {
    codepoints: [8706, 824],
    character: '∂̸',
  },
  '&npolint;': {
    codepoints: [10772],
    character: '⨔',
  },
  '&npr;': {
    codepoints: [8832],
    character: '⊀',
  },
  '&nprcue;': {
    codepoints: [8928],
    character: '⋠',
  },
  '&npre;': {
    codepoints: [10927, 824],
    character: '⪯̸',
  },
  '&nprec;': {
    codepoints: [8832],
    character: '⊀',
  },
  '&npreceq;': {
    codepoints: [10927, 824],
    character: '⪯̸',
  },
  '&nrArr;': {
    codepoints: [8655],
    character: '⇏',
  },
  '&nrarr;': {
    codepoints: [8603],
    character: '↛',
  },
  '&nrarrc;': {
    codepoints: [10547, 824],
    character: '⤳̸',
  },
  '&nrarrw;': {
    codepoints: [8605, 824],
    character: '↝̸',
  },
  '&nrightarrow;': {
    codepoints: [8603],
    character: '↛',
  },
  '&nrtri;': {
    codepoints: [8939],
    character: '⋫',
  },
  '&nrtrie;': {
    codepoints: [8941],
    character: '⋭',
  },
  '&nsc;': {
    codepoints: [8833],
    character: '⊁',
  },
  '&nsccue;': {
    codepoints: [8929],
    character: '⋡',
  },
  '&nsce;': {
    codepoints: [10928, 824],
    character: '⪰̸',
  },
  '&nscr;': {
    codepoints: [120003],
    character: '𝓃',
  },
  '&nshortmid;': {
    codepoints: [8740],
    character: '∤',
  },
  '&nshortparallel;': {
    codepoints: [8742],
    character: '∦',
  },
  '&nsim;': {
    codepoints: [8769],
    character: '≁',
  },
  '&nsime;': {
    codepoints: [8772],
    character: '≄',
  },
  '&nsimeq;': {
    codepoints: [8772],
    character: '≄',
  },
  '&nsmid;': {
    codepoints: [8740],
    character: '∤',
  },
  '&nspar;': {
    codepoints: [8742],
    character: '∦',
  },
  '&nsqsube;': {
    codepoints: [8930],
    character: '⋢',
  },
  '&nsqsupe;': {
    codepoints: [8931],
    character: '⋣',
  },
  '&nsub;': {
    codepoints: [8836],
    character: '⊄',
  },
  '&nsubE;': {
    codepoints: [10949, 824],
    character: '⫅̸',
  },
  '&nsube;': {
    codepoints: [8840],
    character: '⊈',
  },
  '&nsubset;': {
    codepoints: [8834, 8402],
    character: '⊂⃒',
  },
  '&nsubseteq;': {
    codepoints: [8840],
    character: '⊈',
  },
  '&nsubseteqq;': {
    codepoints: [10949, 824],
    character: '⫅̸',
  },
  '&nsucc;': {
    codepoints: [8833],
    character: '⊁',
  },
  '&nsucceq;': {
    codepoints: [10928, 824],
    character: '⪰̸',
  },
  '&nsup;': {
    codepoints: [8837],
    character: '⊅',
  },
  '&nsupE;': {
    codepoints: [10950, 824],
    character: '⫆̸',
  },
  '&nsupe;': {
    codepoints: [8841],
    character: '⊉',
  },
  '&nsupset;': {
    codepoints: [8835, 8402],
    character: '⊃⃒',
  },
  '&nsupseteq;': {
    codepoints: [8841],
    character: '⊉',
  },
  '&nsupseteqq;': {
    codepoints: [10950, 824],
    character: '⫆̸',
  },
  '&ntgl;': {
    codepoints: [8825],
    character: '≹',
  },
  '&ntilde': {
    codepoints: [241],
    character: 'ñ',
  },
  '&ntilde;': {
    codepoints: [241],
    character: 'ñ',
  },
  '&ntlg;': {
    codepoints: [8824],
    character: '≸',
  },
  '&ntriangleleft;': {
    codepoints: [8938],
    character: '⋪',
  },
  '&ntrianglelefteq;': {
    codepoints: [8940],
    character: '⋬',
  },
  '&ntriangleright;': {
    codepoints: [8939],
    character: '⋫',
  },
  '&ntrianglerighteq;': {
    codepoints: [8941],
    character: '⋭',
  },
  '&nu;': {
    codepoints: [957],
    character: 'ν',
  },
  '&num;': {
    codepoints: [35],
    character: '#',
  },
  '&numero;': {
    codepoints: [8470],
    character: '№',
  },
  '&numsp;': {
    codepoints: [8199],
    character: ' ',
  },
  '&nvDash;': {
    codepoints: [8877],
    character: '⊭',
  },
  '&nvHarr;': {
    codepoints: [10500],
    character: '⤄',
  },
  '&nvap;': {
    codepoints: [8781, 8402],
    character: '≍⃒',
  },
  '&nvdash;': {
    codepoints: [8876],
    character: '⊬',
  },
  '&nvge;': {
    codepoints: [8805, 8402],
    character: '≥⃒',
  },
  '&nvgt;': {
    codepoints: [62, 8402],
    character: '>⃒',
  },
  '&nvinfin;': {
    codepoints: [10718],
    character: '⧞',
  },
  '&nvlArr;': {
    codepoints: [10498],
    character: '⤂',
  },
  '&nvle;': {
    codepoints: [8804, 8402],
    character: '≤⃒',
  },
  '&nvlt;': {
    codepoints: [60, 8402],
    character: '<⃒',
  },
  '&nvltrie;': {
    codepoints: [8884, 8402],
    character: '⊴⃒',
  },
  '&nvrArr;': {
    codepoints: [10499],
    character: '⤃',
  },
  '&nvrtrie;': {
    codepoints: [8885, 8402],
    character: '⊵⃒',
  },
  '&nvsim;': {
    codepoints: [8764, 8402],
    character: '∼⃒',
  },
  '&nwArr;': {
    codepoints: [8662],
    character: '⇖',
  },
  '&nwarhk;': {
    codepoints: [10531],
    character: '⤣',
  },
  '&nwarr;': {
    codepoints: [8598],
    character: '↖',
  },
  '&nwarrow;': {
    codepoints: [8598],
    character: '↖',
  },
  '&nwnear;': {
    codepoints: [10535],
    character: '⤧',
  },
  '&oS;': {
    codepoints: [9416],
    character: 'Ⓢ',
  },
  '&oacute': {
    codepoints: [243],
    character: 'ó',
  },
  '&oacute;': {
    codepoints: [243],
    character: 'ó',
  },
  '&oast;': {
    codepoints: [8859],
    character: '⊛',
  },
  '&ocir;': {
    codepoints: [8858],
    character: '⊚',
  },
  '&ocirc': {
    codepoints: [244],
    character: 'ô',
  },
  '&ocirc;': {
    codepoints: [244],
    character: 'ô',
  },
  '&ocy;': {
    codepoints: [1086],
    character: 'о',
  },
  '&odash;': {
    codepoints: [8861],
    character: '⊝',
  },
  '&odblac;': {
    codepoints: [337],
    character: 'ő',
  },
  '&odiv;': {
    codepoints: [10808],
    character: '⨸',
  },
  '&odot;': {
    codepoints: [8857],
    character: '⊙',
  },
  '&odsold;': {
    codepoints: [10684],
    character: '⦼',
  },
  '&oelig;': {
    codepoints: [339],
    character: 'œ',
  },
  '&ofcir;': {
    codepoints: [10687],
    character: '⦿',
  },
  '&ofr;': {
    codepoints: [120108],
    character: '𝔬',
  },
  '&ogon;': {
    codepoints: [731],
    character: '˛',
  },
  '&ograve': {
    codepoints: [242],
    character: 'ò',
  },
  '&ograve;': {
    codepoints: [242],
    character: 'ò',
  },
  '&ogt;': {
    codepoints: [10689],
    character: '⧁',
  },
  '&ohbar;': {
    codepoints: [10677],
    character: '⦵',
  },
  '&ohm;': {
    codepoints: [937],
    character: 'Ω',
  },
  '&oint;': {
    codepoints: [8750],
    character: '∮',
  },
  '&olarr;': {
    codepoints: [8634],
    character: '↺',
  },
  '&olcir;': {
    codepoints: [10686],
    character: '⦾',
  },
  '&olcross;': {
    codepoints: [10683],
    character: '⦻',
  },
  '&oline;': {
    codepoints: [8254],
    character: '‾',
  },
  '&olt;': {
    codepoints: [10688],
    character: '⧀',
  },
  '&omacr;': {
    codepoints: [333],
    character: 'ō',
  },
  '&omega;': {
    codepoints: [969],
    character: 'ω',
  },
  '&omicron;': {
    codepoints: [959],
    character: 'ο',
  },
  '&omid;': {
    codepoints: [10678],
    character: '⦶',
  },
  '&ominus;': {
    codepoints: [8854],
    character: '⊖',
  },
  '&oopf;': {
    codepoints: [120160],
    character: '𝕠',
  },
  '&opar;': {
    codepoints: [10679],
    character: '⦷',
  },
  '&operp;': {
    codepoints: [10681],
    character: '⦹',
  },
  '&oplus;': {
    codepoints: [8853],
    character: '⊕',
  },
  '&or;': {
    codepoints: [8744],
    character: '∨',
  },
  '&orarr;': {
    codepoints: [8635],
    character: '↻',
  },
  '&ord;': {
    codepoints: [10845],
    character: '⩝',
  },
  '&order;': {
    codepoints: [8500],
    character: 'ℴ',
  },
  '&orderof;': {
    codepoints: [8500],
    character: 'ℴ',
  },
  '&ordf': {
    codepoints: [170],
    character: 'ª',
  },
  '&ordf;': {
    codepoints: [170],
    character: 'ª',
  },
  '&ordm': {
    codepoints: [186],
    character: 'º',
  },
  '&ordm;': {
    codepoints: [186],
    character: 'º',
  },
  '&origof;': {
    codepoints: [8886],
    character: '⊶',
  },
  '&oror;': {
    codepoints: [10838],
    character: '⩖',
  },
  '&orslope;': {
    codepoints: [10839],
    character: '⩗',
  },
  '&orv;': {
    codepoints: [10843],
    character: '⩛',
  },
  '&oscr;': {
    codepoints: [8500],
    character: 'ℴ',
  },
  '&oslash': {
    codepoints: [248],
    character: 'ø',
  },
  '&oslash;': {
    codepoints: [248],
    character: 'ø',
  },
  '&osol;': {
    codepoints: [8856],
    character: '⊘',
  },
  '&otilde': {
    codepoints: [245],
    character: 'õ',
  },
  '&otilde;': {
    codepoints: [245],
    character: 'õ',
  },
  '&otimes;': {
    codepoints: [8855],
    character: '⊗',
  },
  '&otimesas;': {
    codepoints: [10806],
    character: '⨶',
  },
  '&ouml': {
    codepoints: [246],
    character: 'ö',
  },
  '&ouml;': {
    codepoints: [246],
    character: 'ö',
  },
  '&ovbar;': {
    codepoints: [9021],
    character: '⌽',
  },
  '&par;': {
    codepoints: [8741],
    character: '∥',
  },
  '&para': {
    codepoints: [182],
    character: '¶',
  },
  '&para;': {
    codepoints: [182],
    character: '¶',
  },
  '&parallel;': {
    codepoints: [8741],
    character: '∥',
  },
  '&parsim;': {
    codepoints: [10995],
    character: '⫳',
  },
  '&parsl;': {
    codepoints: [11005],
    character: '⫽',
  },
  '&part;': {
    codepoints: [8706],
    character: '∂',
  },
  '&pcy;': {
    codepoints: [1087],
    character: 'п',
  },
  '&percnt;': {
    codepoints: [37],
    character: '%',
  },
  '&period;': {
    codepoints: [46],
    character: '.',
  },
  '&permil;': {
    codepoints: [8240],
    character: '‰',
  },
  '&perp;': {
    codepoints: [8869],
    character: '⊥',
  },
  '&pertenk;': {
    codepoints: [8241],
    character: '‱',
  },
  '&pfr;': {
    codepoints: [120109],
    character: '𝔭',
  },
  '&phi;': {
    codepoints: [966],
    character: 'φ',
  },
  '&phiv;': {
    codepoints: [981],
    character: 'ϕ',
  },
  '&phmmat;': {
    codepoints: [8499],
    character: 'ℳ',
  },
  '&phone;': {
    codepoints: [9742],
    character: '☎',
  },
  '&pi;': {
    codepoints: [960],
    character: 'π',
  },
  '&pitchfork;': {
    codepoints: [8916],
    character: '⋔',
  },
  '&piv;': {
    codepoints: [982],
    character: 'ϖ',
  },
  '&planck;': {
    codepoints: [8463],
    character: 'ℏ',
  },
  '&planckh;': {
    codepoints: [8462],
    character: 'ℎ',
  },
  '&plankv;': {
    codepoints: [8463],
    character: 'ℏ',
  },
  '&plus;': {
    codepoints: [43],
    character: '+',
  },
  '&plusacir;': {
    codepoints: [10787],
    character: '⨣',
  },
  '&plusb;': {
    codepoints: [8862],
    character: '⊞',
  },
  '&pluscir;': {
    codepoints: [10786],
    character: '⨢',
  },
  '&plusdo;': {
    codepoints: [8724],
    character: '∔',
  },
  '&plusdu;': {
    codepoints: [10789],
    character: '⨥',
  },
  '&pluse;': {
    codepoints: [10866],
    character: '⩲',
  },
  '&plusmn': {
    codepoints: [177],
    character: '±',
  },
  '&plusmn;': {
    codepoints: [177],
    character: '±',
  },
  '&plussim;': {
    codepoints: [10790],
    character: '⨦',
  },
  '&plustwo;': {
    codepoints: [10791],
    character: '⨧',
  },
  '&pm;': {
    codepoints: [177],
    character: '±',
  },
  '&pointint;': {
    codepoints: [10773],
    character: '⨕',
  },
  '&popf;': {
    codepoints: [120161],
    character: '𝕡',
  },
  '&pound': {
    codepoints: [163],
    character: '£',
  },
  '&pound;': {
    codepoints: [163],
    character: '£',
  },
  '&pr;': {
    codepoints: [8826],
    character: '≺',
  },
  '&prE;': {
    codepoints: [10931],
    character: '⪳',
  },
  '&prap;': {
    codepoints: [10935],
    character: '⪷',
  },
  '&prcue;': {
    codepoints: [8828],
    character: '≼',
  },
  '&pre;': {
    codepoints: [10927],
    character: '⪯',
  },
  '&prec;': {
    codepoints: [8826],
    character: '≺',
  },
  '&precapprox;': {
    codepoints: [10935],
    character: '⪷',
  },
  '&preccurlyeq;': {
    codepoints: [8828],
    character: '≼',
  },
  '&preceq;': {
    codepoints: [10927],
    character: '⪯',
  },
  '&precnapprox;': {
    codepoints: [10937],
    character: '⪹',
  },
  '&precneqq;': {
    codepoints: [10933],
    character: '⪵',
  },
  '&precnsim;': {
    codepoints: [8936],
    character: '⋨',
  },
  '&precsim;': {
    codepoints: [8830],
    character: '≾',
  },
  '&prime;': {
    codepoints: [8242],
    character: '′',
  },
  '&primes;': {
    codepoints: [8473],
    character: 'ℙ',
  },
  '&prnE;': {
    codepoints: [10933],
    character: '⪵',
  },
  '&prnap;': {
    codepoints: [10937],
    character: '⪹',
  },
  '&prnsim;': {
    codepoints: [8936],
    character: '⋨',
  },
  '&prod;': {
    codepoints: [8719],
    character: '∏',
  },
  '&profalar;': {
    codepoints: [9006],
    character: '⌮',
  },
  '&profline;': {
    codepoints: [8978],
    character: '⌒',
  },
  '&profsurf;': {
    codepoints: [8979],
    character: '⌓',
  },
  '&prop;': {
    codepoints: [8733],
    character: '∝',
  },
  '&propto;': {
    codepoints: [8733],
    character: '∝',
  },
  '&prsim;': {
    codepoints: [8830],
    character: '≾',
  },
  '&prurel;': {
    codepoints: [8880],
    character: '⊰',
  },
  '&pscr;': {
    codepoints: [120005],
    character: '𝓅',
  },
  '&psi;': {
    codepoints: [968],
    character: 'ψ',
  },
  '&puncsp;': {
    codepoints: [8200],
    character: ' ',
  },
  '&qfr;': {
    codepoints: [120110],
    character: '𝔮',
  },
  '&qint;': {
    codepoints: [10764],
    character: '⨌',
  },
  '&qopf;': {
    codepoints: [120162],
    character: '𝕢',
  },
  '&qprime;': {
    codepoints: [8279],
    character: '⁗',
  },
  '&qscr;': {
    codepoints: [120006],
    character: '𝓆',
  },
  '&quaternions;': {
    codepoints: [8461],
    character: 'ℍ',
  },
  '&quatint;': {
    codepoints: [10774],
    character: '⨖',
  },
  '&quest;': {
    codepoints: [63],
    character: '?',
  },
  '&questeq;': {
    codepoints: [8799],
    character: '≟',
  },
  '&quot': {
    codepoints: [34],
    character: '"',
  },
  '&quot;': {
    codepoints: [34],
    character: '"',
  },
  '&rAarr;': {
    codepoints: [8667],
    character: '⇛',
  },
  '&rArr;': {
    codepoints: [8658],
    character: '⇒',
  },
  '&rAtail;': {
    codepoints: [10524],
    character: '⤜',
  },
  '&rBarr;': {
    codepoints: [10511],
    character: '⤏',
  },
  '&rHar;': {
    codepoints: [10596],
    character: '⥤',
  },
  '&race;': {
    codepoints: [8765, 817],
    character: '∽̱',
  },
  '&racute;': {
    codepoints: [341],
    character: 'ŕ',
  },
  '&radic;': {
    codepoints: [8730],
    character: '√',
  },
  '&raemptyv;': {
    codepoints: [10675],
    character: '⦳',
  },
  '&rang;': {
    codepoints: [10217],
    character: '⟩',
  },
  '&rangd;': {
    codepoints: [10642],
    character: '⦒',
  },
  '&range;': {
    codepoints: [10661],
    character: '⦥',
  },
  '&rangle;': {
    codepoints: [10217],
    character: '⟩',
  },
  '&raquo': {
    codepoints: [187],
    character: '»',
  },
  '&raquo;': {
    codepoints: [187],
    character: '»',
  },
  '&rarr;': {
    codepoints: [8594],
    character: '→',
  },
  '&rarrap;': {
    codepoints: [10613],
    character: '⥵',
  },
  '&rarrb;': {
    codepoints: [8677],
    character: '⇥',
  },
  '&rarrbfs;': {
    codepoints: [10528],
    character: '⤠',
  },
  '&rarrc;': {
    codepoints: [10547],
    character: '⤳',
  },
  '&rarrfs;': {
    codepoints: [10526],
    character: '⤞',
  },
  '&rarrhk;': {
    codepoints: [8618],
    character: '↪',
  },
  '&rarrlp;': {
    codepoints: [8620],
    character: '↬',
  },
  '&rarrpl;': {
    codepoints: [10565],
    character: '⥅',
  },
  '&rarrsim;': {
    codepoints: [10612],
    character: '⥴',
  },
  '&rarrtl;': {
    codepoints: [8611],
    character: '↣',
  },
  '&rarrw;': {
    codepoints: [8605],
    character: '↝',
  },
  '&ratail;': {
    codepoints: [10522],
    character: '⤚',
  },
  '&ratio;': {
    codepoints: [8758],
    character: '∶',
  },
  '&rationals;': {
    codepoints: [8474],
    character: 'ℚ',
  },
  '&rbarr;': {
    codepoints: [10509],
    character: '⤍',
  },
  '&rbbrk;': {
    codepoints: [10099],
    character: '❳',
  },
  '&rbrace;': {
    codepoints: [125],
    character: '}',
  },
  '&rbrack;': {
    codepoints: [93],
    character: ']',
  },
  '&rbrke;': {
    codepoints: [10636],
    character: '⦌',
  },
  '&rbrksld;': {
    codepoints: [10638],
    character: '⦎',
  },
  '&rbrkslu;': {
    codepoints: [10640],
    character: '⦐',
  },
  '&rcaron;': {
    codepoints: [345],
    character: 'ř',
  },
  '&rcedil;': {
    codepoints: [343],
    character: 'ŗ',
  },
  '&rceil;': {
    codepoints: [8969],
    character: '⌉',
  },
  '&rcub;': {
    codepoints: [125],
    character: '}',
  },
  '&rcy;': {
    codepoints: [1088],
    character: 'р',
  },
  '&rdca;': {
    codepoints: [10551],
    character: '⤷',
  },
  '&rdldhar;': {
    codepoints: [10601],
    character: '⥩',
  },
  '&rdquo;': {
    codepoints: [8221],
    character: '”',
  },
  '&rdquor;': {
    codepoints: [8221],
    character: '”',
  },
  '&rdsh;': {
    codepoints: [8627],
    character: '↳',
  },
  '&real;': {
    codepoints: [8476],
    character: 'ℜ',
  },
  '&realine;': {
    codepoints: [8475],
    character: 'ℛ',
  },
  '&realpart;': {
    codepoints: [8476],
    character: 'ℜ',
  },
  '&reals;': {
    codepoints: [8477],
    character: 'ℝ',
  },
  '&rect;': {
    codepoints: [9645],
    character: '▭',
  },
  '&reg': {
    codepoints: [174],
    character: '®',
  },
  '&reg;': {
    codepoints: [174],
    character: '®',
  },
  '&rfisht;': {
    codepoints: [10621],
    character: '⥽',
  },
  '&rfloor;': {
    codepoints: [8971],
    character: '⌋',
  },
  '&rfr;': {
    codepoints: [120111],
    character: '𝔯',
  },
  '&rhard;': {
    codepoints: [8641],
    character: '⇁',
  },
  '&rharu;': {
    codepoints: [8640],
    character: '⇀',
  },
  '&rharul;': {
    codepoints: [10604],
    character: '⥬',
  },
  '&rho;': {
    codepoints: [961],
    character: 'ρ',
  },
  '&rhov;': {
    codepoints: [1009],
    character: 'ϱ',
  },
  '&rightarrow;': {
    codepoints: [8594],
    character: '→',
  },
  '&rightarrowtail;': {
    codepoints: [8611],
    character: '↣',
  },
  '&rightharpoondown;': {
    codepoints: [8641],
    character: '⇁',
  },
  '&rightharpoonup;': {
    codepoints: [8640],
    character: '⇀',
  },
  '&rightleftarrows;': {
    codepoints: [8644],
    character: '⇄',
  },
  '&rightleftharpoons;': {
    codepoints: [8652],
    character: '⇌',
  },
  '&rightrightarrows;': {
    codepoints: [8649],
    character: '⇉',
  },
  '&rightsquigarrow;': {
    codepoints: [8605],
    character: '↝',
  },
  '&rightthreetimes;': {
    codepoints: [8908],
    character: '⋌',
  },
  '&ring;': {
    codepoints: [730],
    character: '˚',
  },
  '&risingdotseq;': {
    codepoints: [8787],
    character: '≓',
  },
  '&rlarr;': {
    codepoints: [8644],
    character: '⇄',
  },
  '&rlhar;': {
    codepoints: [8652],
    character: '⇌',
  },
  '&rlm;': {
    codepoints: [8207],
    character: '\u200F',
  },
  '&rmoust;': {
    codepoints: [9137],
    character: '⎱',
  },
  '&rmoustache;': {
    codepoints: [9137],
    character: '⎱',
  },
  '&rnmid;': {
    codepoints: [10990],
    character: '⫮',
  },
  '&roang;': {
    codepoints: [10221],
    character: '⟭',
  },
  '&roarr;': {
    codepoints: [8702],
    character: '⇾',
  },
  '&robrk;': {
    codepoints: [10215],
    character: '⟧',
  },
  '&ropar;': {
    codepoints: [10630],
    character: '⦆',
  },
  '&ropf;': {
    codepoints: [120163],
    character: '𝕣',
  },
  '&roplus;': {
    codepoints: [10798],
    character: '⨮',
  },
  '&rotimes;': {
    codepoints: [10805],
    character: '⨵',
  },
  '&rpar;': {
    codepoints: [41],
    character: ')',
  },
  '&rpargt;': {
    codepoints: [10644],
    character: '⦔',
  },
  '&rppolint;': {
    codepoints: [10770],
    character: '⨒',
  },
  '&rrarr;': {
    codepoints: [8649],
    character: '⇉',
  },
  '&rsaquo;': {
    codepoints: [8250],
    character: '›',
  },
  '&rscr;': {
    codepoints: [120007],
    character: '𝓇',
  },
  '&rsh;': {
    codepoints: [8625],
    character: '↱',
  },
  '&rsqb;': {
    codepoints: [93],
    character: ']',
  },
  '&rsquo;': {
    codepoints: [8217],
    character: '’',
  },
  '&rsquor;': {
    codepoints: [8217],
    character: '’',
  },
  '&rthree;': {
    codepoints: [8908],
    character: '⋌',
  },
  '&rtimes;': {
    codepoints: [8906],
    character: '⋊',
  },
  '&rtri;': {
    codepoints: [9657],
    character: '▹',
  },
  '&rtrie;': {
    codepoints: [8885],
    character: '⊵',
  },
  '&rtrif;': {
    codepoints: [9656],
    character: '▸',
  },
  '&rtriltri;': {
    codepoints: [10702],
    character: '⧎',
  },
  '&ruluhar;': {
    codepoints: [10600],
    character: '⥨',
  },
  '&rx;': {
    codepoints: [8478],
    character: '℞',
  },
  '&sacute;': {
    codepoints: [347],
    character: 'ś',
  },
  '&sbquo;': {
    codepoints: [8218],
    character: '‚',
  },
  '&sc;': {
    codepoints: [8827],
    character: '≻',
  },
  '&scE;': {
    codepoints: [10932],
    character: '⪴',
  },
  '&scap;': {
    codepoints: [10936],
    character: '⪸',
  },
  '&scaron;': {
    codepoints: [353],
    character: 'š',
  },
  '&sccue;': {
    codepoints: [8829],
    character: '≽',
  },
  '&sce;': {
    codepoints: [10928],
    character: '⪰',
  },
  '&scedil;': {
    codepoints: [351],
    character: 'ş',
  },
  '&scirc;': {
    codepoints: [349],
    character: 'ŝ',
  },
  '&scnE;': {
    codepoints: [10934],
    character: '⪶',
  },
  '&scnap;': {
    codepoints: [10938],
    character: '⪺',
  },
  '&scnsim;': {
    codepoints: [8937],
    character: '⋩',
  },
  '&scpolint;': {
    codepoints: [10771],
    character: '⨓',
  },
  '&scsim;': {
    codepoints: [8831],
    character: '≿',
  },
  '&scy;': {
    codepoints: [1089],
    character: 'с',
  },
  '&sdot;': {
    codepoints: [8901],
    character: '⋅',
  },
  '&sdotb;': {
    codepoints: [8865],
    character: '⊡',
  },
  '&sdote;': {
    codepoints: [10854],
    character: '⩦',
  },
  '&seArr;': {
    codepoints: [8664],
    character: '⇘',
  },
  '&searhk;': {
    codepoints: [10533],
    character: '⤥',
  },
  '&searr;': {
    codepoints: [8600],
    character: '↘',
  },
  '&searrow;': {
    codepoints: [8600],
    character: '↘',
  },
  '&sect': {
    codepoints: [167],
    character: '§',
  },
  '&sect;': {
    codepoints: [167],
    character: '§',
  },
  '&semi;': {
    codepoints: [59],
    character: ';',
  },
  '&seswar;': {
    codepoints: [10537],
    character: '⤩',
  },
  '&setminus;': {
    codepoints: [8726],
    character: '∖',
  },
  '&setmn;': {
    codepoints: [8726],
    character: '∖',
  },
  '&sext;': {
    codepoints: [10038],
    character: '✶',
  },
  '&sfr;': {
    codepoints: [120112],
    character: '𝔰',
  },
  '&sfrown;': {
    codepoints: [8994],
    character: '⌢',
  },
  '&sharp;': {
    codepoints: [9839],
    character: '♯',
  },
  '&shchcy;': {
    codepoints: [1097],
    character: 'щ',
  },
  '&shcy;': {
    codepoints: [1096],
    character: 'ш',
  },
  '&shortmid;': {
    codepoints: [8739],
    character: '∣',
  },
  '&shortparallel;': {
    codepoints: [8741],
    character: '∥',
  },
  '&shy': {
    codepoints: [173],
    character: '\u00AD',
  },
  '&shy;': {
    codepoints: [173],
    character: '\u00AD',
  },
  '&sigma;': {
    codepoints: [963],
    character: 'σ',
  },
  '&sigmaf;': {
    codepoints: [962],
    character: 'ς',
  },
  '&sigmav;': {
    codepoints: [962],
    character: 'ς',
  },
  '&sim;': {
    codepoints: [8764],
    character: '∼',
  },
  '&simdot;': {
    codepoints: [10858],
    character: '⩪',
  },
  '&sime;': {
    codepoints: [8771],
    character: '≃',
  },
  '&simeq;': {
    codepoints: [8771],
    character: '≃',
  },
  '&simg;': {
    codepoints: [10910],
    character: '⪞',
  },
  '&simgE;': {
    codepoints: [10912],
    character: '⪠',
  },
  '&siml;': {
    codepoints: [10909],
    character: '⪝',
  },
  '&simlE;': {
    codepoints: [10911],
    character: '⪟',
  },
  '&simne;': {
    codepoints: [8774],
    character: '≆',
  },
  '&simplus;': {
    codepoints: [10788],
    character: '⨤',
  },
  '&simrarr;': {
    codepoints: [10610],
    character: '⥲',
  },
  '&slarr;': {
    codepoints: [8592],
    character: '←',
  },
  '&smallsetminus;': {
    codepoints: [8726],
    character: '∖',
  },
  '&smashp;': {
    codepoints: [10803],
    character: '⨳',
  },
  '&smeparsl;': {
    codepoints: [10724],
    character: '⧤',
  },
  '&smid;': {
    codepoints: [8739],
    character: '∣',
  },
  '&smile;': {
    codepoints: [8995],
    character: '⌣',
  },
  '&smt;': {
    codepoints: [10922],
    character: '⪪',
  },
  '&smte;': {
    codepoints: [10924],
    character: '⪬',
  },
  '&smtes;': {
    codepoints: [10924, 65024],
    character: '⪬︀',
  },
  '&softcy;': {
    codepoints: [1100],
    character: 'ь',
  },
  '&sol;': {
    codepoints: [47],
    character: '/',
  },
  '&solb;': {
    codepoints: [10692],
    character: '⧄',
  },
  '&solbar;': {
    codepoints: [9023],
    character: '⌿',
  },
  '&sopf;': {
    codepoints: [120164],
    character: '𝕤',
  },
  '&spades;': {
    codepoints: [9824],
    character: '♠',
  },
  '&spadesuit;': {
    codepoints: [9824],
    character: '♠',
  },
  '&spar;': {
    codepoints: [8741],
    character: '∥',
  },
  '&sqcap;': {
    codepoints: [8851],
    character: '⊓',
  },
  '&sqcaps;': {
    codepoints: [8851, 65024],
    character: '⊓︀',
  },
  '&sqcup;': {
    codepoints: [8852],
    character: '⊔',
  },
  '&sqcups;': {
    codepoints: [8852, 65024],
    character: '⊔︀',
  },
  '&sqsub;': {
    codepoints: [8847],
    character: '⊏',
  },
  '&sqsube;': {
    codepoints: [8849],
    character: '⊑',
  },
  '&sqsubset;': {
    codepoints: [8847],
    character: '⊏',
  },
  '&sqsubseteq;': {
    codepoints: [8849],
    character: '⊑',
  },
  '&sqsup;': {
    codepoints: [8848],
    character: '⊐',
  },
  '&sqsupe;': {
    codepoints: [8850],
    character: '⊒',
  },
  '&sqsupset;': {
    codepoints: [8848],
    character: '⊐',
  },
  '&sqsupseteq;': {
    codepoints: [8850],
    character: '⊒',
  },
  '&squ;': {
    codepoints: [9633],
    character: '□',
  },
  '&square;': {
    codepoints: [9633],
    character: '□',
  },
  '&squarf;': {
    codepoints: [9642],
    character: '▪',
  },
  '&squf;': {
    codepoints: [9642],
    character: '▪',
  },
  '&srarr;': {
    codepoints: [8594],
    character: '→',
  },
  '&sscr;': {
    codepoints: [120008],
    character: '𝓈',
  },
  '&ssetmn;': {
    codepoints: [8726],
    character: '∖',
  },
  '&ssmile;': {
    codepoints: [8995],
    character: '⌣',
  },
  '&sstarf;': {
    codepoints: [8902],
    character: '⋆',
  },
  '&star;': {
    codepoints: [9734],
    character: '☆',
  },
  '&starf;': {
    codepoints: [9733],
    character: '★',
  },
  '&straightepsilon;': {
    codepoints: [1013],
    character: 'ϵ',
  },
  '&straightphi;': {
    codepoints: [981],
    character: 'ϕ',
  },
  '&strns;': {
    codepoints: [175],
    character: '¯',
  },
  '&sub;': {
    codepoints: [8834],
    character: '⊂',
  },
  '&subE;': {
    codepoints: [10949],
    character: '⫅',
  },
  '&subdot;': {
    codepoints: [10941],
    character: '⪽',
  },
  '&sube;': {
    codepoints: [8838],
    character: '⊆',
  },
  '&subedot;': {
    codepoints: [10947],
    character: '⫃',
  },
  '&submult;': {
    codepoints: [10945],
    character: '⫁',
  },
  '&subnE;': {
    codepoints: [10955],
    character: '⫋',
  },
  '&subne;': {
    codepoints: [8842],
    character: '⊊',
  },
  '&subplus;': {
    codepoints: [10943],
    character: '⪿',
  },
  '&subrarr;': {
    codepoints: [10617],
    character: '⥹',
  },
  '&subset;': {
    codepoints: [8834],
    character: '⊂',
  },
  '&subseteq;': {
    codepoints: [8838],
    character: '⊆',
  },
  '&subseteqq;': {
    codepoints: [10949],
    character: '⫅',
  },
  '&subsetneq;': {
    codepoints: [8842],
    character: '⊊',
  },
  '&subsetneqq;': {
    codepoints: [10955],
    character: '⫋',
  },
  '&subsim;': {
    codepoints: [10951],
    character: '⫇',
  },
  '&subsub;': {
    codepoints: [10965],
    character: '⫕',
  },
  '&subsup;': {
    codepoints: [10963],
    character: '⫓',
  },
  '&succ;': {
    codepoints: [8827],
    character: '≻',
  },
  '&succapprox;': {
    codepoints: [10936],
    character: '⪸',
  },
  '&succcurlyeq;': {
    codepoints: [8829],
    character: '≽',
  },
  '&succeq;': {
    codepoints: [10928],
    character: '⪰',
  },
  '&succnapprox;': {
    codepoints: [10938],
    character: '⪺',
  },
  '&succneqq;': {
    codepoints: [10934],
    character: '⪶',
  },
  '&succnsim;': {
    codepoints: [8937],
    character: '⋩',
  },
  '&succsim;': {
    codepoints: [8831],
    character: '≿',
  },
  '&sum;': {
    codepoints: [8721],
    character: '∑',
  },
  '&sung;': {
    codepoints: [9834],
    character: '♪',
  },
  '&sup1': {
    codepoints: [185],
    character: '¹',
  },
  '&sup1;': {
    codepoints: [185],
    character: '¹',
  },
  '&sup2': {
    codepoints: [178],
    character: '²',
  },
  '&sup2;': {
    codepoints: [178],
    character: '²',
  },
  '&sup3': {
    codepoints: [179],
    character: '³',
  },
  '&sup3;': {
    codepoints: [179],
    character: '³',
  },
  '&sup;': {
    codepoints: [8835],
    character: '⊃',
  },
  '&supE;': {
    codepoints: [10950],
    character: '⫆',
  },
  '&supdot;': {
    codepoints: [10942],
    character: '⪾',
  },
  '&supdsub;': {
    codepoints: [10968],
    character: '⫘',
  },
  '&supe;': {
    codepoints: [8839],
    character: '⊇',
  },
  '&supedot;': {
    codepoints: [10948],
    character: '⫄',
  },
  '&suphsol;': {
    codepoints: [10185],
    character: '⟉',
  },
  '&suphsub;': {
    codepoints: [10967],
    character: '⫗',
  },
  '&suplarr;': {
    codepoints: [10619],
    character: '⥻',
  },
  '&supmult;': {
    codepoints: [10946],
    character: '⫂',
  },
  '&supnE;': {
    codepoints: [10956],
    character: '⫌',
  },
  '&supne;': {
    codepoints: [8843],
    character: '⊋',
  },
  '&supplus;': {
    codepoints: [10944],
    character: '⫀',
  },
  '&supset;': {
    codepoints: [8835],
    character: '⊃',
  },
  '&supseteq;': {
    codepoints: [8839],
    character: '⊇',
  },
  '&supseteqq;': {
    codepoints: [10950],
    character: '⫆',
  },
  '&supsetneq;': {
    codepoints: [8843],
    character: '⊋',
  },
  '&supsetneqq;': {
    codepoints: [10956],
    character: '⫌',
  },
  '&supsim;': {
    codepoints: [10952],
    character: '⫈',
  },
  '&supsub;': {
    codepoints: [10964],
    character: '⫔',
  },
  '&supsup;': {
    codepoints: [10966],
    character: '⫖',
  },
  '&swArr;': {
    codepoints: [8665],
    character: '⇙',
  },
  '&swarhk;': {
    codepoints: [10534],
    character: '⤦',
  },
  '&swarr;': {
    codepoints: [8601],
    character: '↙',
  },
  '&swarrow;': {
    codepoints: [8601],
    character: '↙',
  },
  '&swnwar;': {
    codepoints: [10538],
    character: '⤪',
  },
  '&szlig': {
    codepoints: [223],
    character: 'ß',
  },
  '&szlig;': {
    codepoints: [223],
    character: 'ß',
  },
  '&target;': {
    codepoints: [8982],
    character: '⌖',
  },
  '&tau;': {
    codepoints: [964],
    character: 'τ',
  },
  '&tbrk;': {
    codepoints: [9140],
    character: '⎴',
  },
  '&tcaron;': {
    codepoints: [357],
    character: 'ť',
  },
  '&tcedil;': {
    codepoints: [355],
    character: 'ţ',
  },
  '&tcy;': {
    codepoints: [1090],
    character: 'т',
  },
  '&tdot;': {
    codepoints: [8411],
    character: '⃛',
  },
  '&telrec;': {
    codepoints: [8981],
    character: '⌕',
  },
  '&tfr;': {
    codepoints: [120113],
    character: '𝔱',
  },
  '&there4;': {
    codepoints: [8756],
    character: '∴',
  },
  '&therefore;': {
    codepoints: [8756],
    character: '∴',
  },
  '&theta;': {
    codepoints: [952],
    character: 'θ',
  },
  '&thetasym;': {
    codepoints: [977],
    character: 'ϑ',
  },
  '&thetav;': {
    codepoints: [977],
    character: 'ϑ',
  },
  '&thickapprox;': {
    codepoints: [8776],
    character: '≈',
  },
  '&thicksim;': {
    codepoints: [8764],
    character: '∼',
  },
  '&thinsp;': {
    codepoints: [8201],
    character: ' ',
  },
  '&thkap;': {
    codepoints: [8776],
    character: '≈',
  },
  '&thksim;': {
    codepoints: [8764],
    character: '∼',
  },
  '&thorn': {
    codepoints: [254],
    character: 'þ',
  },
  '&thorn;': {
    codepoints: [254],
    character: 'þ',
  },
  '&tilde;': {
    codepoints: [732],
    character: '˜',
  },
  '&times': {
    codepoints: [215],
    character: '×',
  },
  '&times;': {
    codepoints: [215],
    character: '×',
  },
  '&timesb;': {
    codepoints: [8864],
    character: '⊠',
  },
  '&timesbar;': {
    codepoints: [10801],
    character: '⨱',
  },
  '&timesd;': {
    codepoints: [10800],
    character: '⨰',
  },
  '&tint;': {
    codepoints: [8749],
    character: '∭',
  },
  '&toea;': {
    codepoints: [10536],
    character: '⤨',
  },
  '&top;': {
    codepoints: [8868],
    character: '⊤',
  },
  '&topbot;': {
    codepoints: [9014],
    character: '⌶',
  },
  '&topcir;': {
    codepoints: [10993],
    character: '⫱',
  },
  '&topf;': {
    codepoints: [120165],
    character: '𝕥',
  },
  '&topfork;': {
    codepoints: [10970],
    character: '⫚',
  },
  '&tosa;': {
    codepoints: [10537],
    character: '⤩',
  },
  '&tprime;': {
    codepoints: [8244],
    character: '‴',
  },
  '&trade;': {
    codepoints: [8482],
    character: '™',
  },
  '&triangle;': {
    codepoints: [9653],
    character: '▵',
  },
  '&triangledown;': {
    codepoints: [9663],
    character: '▿',
  },
  '&triangleleft;': {
    codepoints: [9667],
    character: '◃',
  },
  '&trianglelefteq;': {
    codepoints: [8884],
    character: '⊴',
  },
  '&triangleq;': {
    codepoints: [8796],
    character: '≜',
  },
  '&triangleright;': {
    codepoints: [9657],
    character: '▹',
  },
  '&trianglerighteq;': {
    codepoints: [8885],
    character: '⊵',
  },
  '&tridot;': {
    codepoints: [9708],
    character: '◬',
  },
  '&trie;': {
    codepoints: [8796],
    character: '≜',
  },
  '&triminus;': {
    codepoints: [10810],
    character: '⨺',
  },
  '&triplus;': {
    codepoints: [10809],
    character: '⨹',
  },
  '&trisb;': {
    codepoints: [10701],
    character: '⧍',
  },
  '&tritime;': {
    codepoints: [10811],
    character: '⨻',
  },
  '&trpezium;': {
    codepoints: [9186],
    character: '⏢',
  },
  '&tscr;': {
    codepoints: [120009],
    character: '𝓉',
  },
  '&tscy;': {
    codepoints: [1094],
    character: 'ц',
  },
  '&tshcy;': {
    codepoints: [1115],
    character: 'ћ',
  },
  '&tstrok;': {
    codepoints: [359],
    character: 'ŧ',
  },
  '&twixt;': {
    codepoints: [8812],
    character: '≬',
  },
  '&twoheadleftarrow;': {
    codepoints: [8606],
    character: '↞',
  },
  '&twoheadrightarrow;': {
    codepoints: [8608],
    character: '↠',
  },
  '&uArr;': {
    codepoints: [8657],
    character: '⇑',
  },
  '&uHar;': {
    codepoints: [10595],
    character: '⥣',
  },
  '&uacute': {
    codepoints: [250],
    character: 'ú',
  },
  '&uacute;': {
    codepoints: [250],
    character: 'ú',
  },
  '&uarr;': {
    codepoints: [8593],
    character: '↑',
  },
  '&ubrcy;': {
    codepoints: [1118],
    character: 'ў',
  },
  '&ubreve;': {
    codepoints: [365],
    character: 'ŭ',
  },
  '&ucirc': {
    codepoints: [251],
    character: 'û',
  },
  '&ucirc;': {
    codepoints: [251],
    character: 'û',
  },
  '&ucy;': {
    codepoints: [1091],
    character: 'у',
  },
  '&udarr;': {
    codepoints: [8645],
    character: '⇅',
  },
  '&udblac;': {
    codepoints: [369],
    character: 'ű',
  },
  '&udhar;': {
    codepoints: [10606],
    character: '⥮',
  },
  '&ufisht;': {
    codepoints: [10622],
    character: '⥾',
  },
  '&ufr;': {
    codepoints: [120114],
    character: '𝔲',
  },
  '&ugrave': {
    codepoints: [249],
    character: 'ù',
  },
  '&ugrave;': {
    codepoints: [249],
    character: 'ù',
  },
  '&uharl;': {
    codepoints: [8639],
    character: '↿',
  },
  '&uharr;': {
    codepoints: [8638],
    character: '↾',
  },
  '&uhblk;': {
    codepoints: [9600],
    character: '▀',
  },
  '&ulcorn;': {
    codepoints: [8988],
    character: '⌜',
  },
  '&ulcorner;': {
    codepoints: [8988],
    character: '⌜',
  },
  '&ulcrop;': {
    codepoints: [8975],
    character: '⌏',
  },
  '&ultri;': {
    codepoints: [9720],
    character: '◸',
  },
  '&umacr;': {
    codepoints: [363],
    character: 'ū',
  },
  '&uml': {
    codepoints: [168],
    character: '¨',
  },
  '&uml;': {
    codepoints: [168],
    character: '¨',
  },
  '&uogon;': {
    codepoints: [371],
    character: 'ų',
  },
  '&uopf;': {
    codepoints: [120166],
    character: '𝕦',
  },
  '&uparrow;': {
    codepoints: [8593],
    character: '↑',
  },
  '&updownarrow;': {
    codepoints: [8597],
    character: '↕',
  },
  '&upharpoonleft;': {
    codepoints: [8639],
    character: '↿',
  },
  '&upharpoonright;': {
    codepoints: [8638],
    character: '↾',
  },
  '&uplus;': {
    codepoints: [8846],
    character: '⊎',
  },
  '&upsi;': {
    codepoints: [965],
    character: 'υ',
  },
  '&upsih;': {
    codepoints: [978],
    character: 'ϒ',
  },
  '&upsilon;': {
    codepoints: [965],
    character: 'υ',
  },
  '&upuparrows;': {
    codepoints: [8648],
    character: '⇈',
  },
  '&urcorn;': {
    codepoints: [8989],
    character: '⌝',
  },
  '&urcorner;': {
    codepoints: [8989],
    character: '⌝',
  },
  '&urcrop;': {
    codepoints: [8974],
    character: '⌎',
  },
  '&uring;': {
    codepoints: [367],
    character: 'ů',
  },
  '&urtri;': {
    codepoints: [9721],
    character: '◹',
  },
  '&uscr;': {
    codepoints: [120010],
    character: '𝓊',
  },
  '&utdot;': {
    codepoints: [8944],
    character: '⋰',
  },
  '&utilde;': {
    codepoints: [361],
    character: 'ũ',
  },
  '&utri;': {
    codepoints: [9653],
    character: '▵',
  },
  '&utrif;': {
    codepoints: [9652],
    character: '▴',
  },
  '&uuarr;': {
    codepoints: [8648],
    character: '⇈',
  },
  '&uuml': {
    codepoints: [252],
    character: 'ü',
  },
  '&uuml;': {
    codepoints: [252],
    character: 'ü',
  },
  '&uwangle;': {
    codepoints: [10663],
    character: '⦧',
  },
  '&vArr;': {
    codepoints: [8661],
    character: '⇕',
  },
  '&vBar;': {
    codepoints: [10984],
    character: '⫨',
  },
  '&vBarv;': {
    codepoints: [10985],
    character: '⫩',
  },
  '&vDash;': {
    codepoints: [8872],
    character: '⊨',
  },
  '&vangrt;': {
    codepoints: [10652],
    character: '⦜',
  },
  '&varepsilon;': {
    codepoints: [1013],
    character: 'ϵ',
  },
  '&varkappa;': {
    codepoints: [1008],
    character: 'ϰ',
  },
  '&varnothing;': {
    codepoints: [8709],
    character: '∅',
  },
  '&varphi;': {
    codepoints: [981],
    character: 'ϕ',
  },
  '&varpi;': {
    codepoints: [982],
    character: 'ϖ',
  },
  '&varpropto;': {
    codepoints: [8733],
    character: '∝',
  },
  '&varr;': {
    codepoints: [8597],
    character: '↕',
  },
  '&varrho;': {
    codepoints: [1009],
    character: 'ϱ',
  },
  '&varsigma;': {
    codepoints: [962],
    character: 'ς',
  },
  '&varsubsetneq;': {
    codepoints: [8842, 65024],
    character: '⊊︀',
  },
  '&varsubsetneqq;': {
    codepoints: [10955, 65024],
    character: '⫋︀',
  },
  '&varsupsetneq;': {
    codepoints: [8843, 65024],
    character: '⊋︀',
  },
  '&varsupsetneqq;': {
    codepoints: [10956, 65024],
    character: '⫌︀',
  },
  '&vartheta;': {
    codepoints: [977],
    character: 'ϑ',
  },
  '&vartriangleleft;': {
    codepoints: [8882],
    character: '⊲',
  },
  '&vartriangleright;': {
    codepoints: [8883],
    character: '⊳',
  },
  '&vcy;': {
    codepoints: [1074],
    character: 'в',
  },
  '&vdash;': {
    codepoints: [8866],
    character: '⊢',
  },
  '&vee;': {
    codepoints: [8744],
    character: '∨',
  },
  '&veebar;': {
    codepoints: [8891],
    character: '⊻',
  },
  '&veeeq;': {
    codepoints: [8794],
    character: '≚',
  },
  '&vellip;': {
    codepoints: [8942],
    character: '⋮',
  },
  '&verbar;': {
    codepoints: [124],
    character: '|',
  },
  '&vert;': {
    codepoints: [124],
    character: '|',
  },
  '&vfr;': {
    codepoints: [120115],
    character: '𝔳',
  },
  '&vltri;': {
    codepoints: [8882],
    character: '⊲',
  },
  '&vnsub;': {
    codepoints: [8834, 8402],
    character: '⊂⃒',
  },
  '&vnsup;': {
    codepoints: [8835, 8402],
    character: '⊃⃒',
  },
  '&vopf;': {
    codepoints: [120167],
    character: '𝕧',
  },
  '&vprop;': {
    codepoints: [8733],
    character: '∝',
  },
  '&vrtri;': {
    codepoints: [8883],
    character: '⊳',
  },
  '&vscr;': {
    codepoints: [120011],
    character: '𝓋',
  },
  '&vsubnE;': {
    codepoints: [10955, 65024],
    character: '⫋︀',
  },
  '&vsubne;': {
    codepoints: [8842, 65024],
    character: '⊊︀',
  },
  '&vsupnE;': {
    codepoints: [10956, 65024],
    character: '⫌︀',
  },
  '&vsupne;': {
    codepoints: [8843, 65024],
    character: '⊋︀',
  },
  '&vzigzag;': {
    codepoints: [10650],
    character: '⦚',
  },
  '&wcirc;': {
    codepoints: [373],
    character: 'ŵ',
  },
  '&wedbar;': {
    codepoints: [10847],
    character: '⩟',
  },
  '&wedge;': {
    codepoints: [8743],
    character: '∧',
  },
  '&wedgeq;': {
    codepoints: [8793],
    character: '≙',
  },
  '&weierp;': {
    codepoints: [8472],
    character: '℘',
  },
  '&wfr;': {
    codepoints: [120116],
    character: '𝔴',
  },
  '&wopf;': {
    codepoints: [120168],
    character: '𝕨',
  },
  '&wp;': {
    codepoints: [8472],
    character: '℘',
  },
  '&wr;': {
    codepoints: [8768],
    character: '≀',
  },
  '&wreath;': {
    codepoints: [8768],
    character: '≀',
  },
  '&wscr;': {
    codepoints: [120012],
    character: '𝓌',
  },
  '&xcap;': {
    codepoints: [8898],
    character: '⋂',
  },
  '&xcirc;': {
    codepoints: [9711],
    character: '◯',
  },
  '&xcup;': {
    codepoints: [8899],
    character: '⋃',
  },
  '&xdtri;': {
    codepoints: [9661],
    character: '▽',
  },
  '&xfr;': {
    codepoints: [120117],
    character: '𝔵',
  },
  '&xhArr;': {
    codepoints: [10234],
    character: '⟺',
  },
  '&xharr;': {
    codepoints: [10231],
    character: '⟷',
  },
  '&xi;': {
    codepoints: [958],
    character: 'ξ',
  },
  '&xlArr;': {
    codepoints: [10232],
    character: '⟸',
  },
  '&xlarr;': {
    codepoints: [10229],
    character: '⟵',
  },
  '&xmap;': {
    codepoints: [10236],
    character: '⟼',
  },
  '&xnis;': {
    codepoints: [8955],
    character: '⋻',
  },
  '&xodot;': {
    codepoints: [10752],
    character: '⨀',
  },
  '&xopf;': {
    codepoints: [120169],
    character: '𝕩',
  },
  '&xoplus;': {
    codepoints: [10753],
    character: '⨁',
  },
  '&xotime;': {
    codepoints: [10754],
    character: '⨂',
  },
  '&xrArr;': {
    codepoints: [10233],
    character: '⟹',
  },
  '&xrarr;': {
    codepoints: [10230],
    character: '⟶',
  },
  '&xscr;': {
    codepoints: [120013],
    character: '𝓍',
  },
  '&xsqcup;': {
    codepoints: [10758],
    character: '⨆',
  },
  '&xuplus;': {
    codepoints: [10756],
    character: '⨄',
  },
  '&xutri;': {
    codepoints: [9651],
    character: '△',
  },
  '&xvee;': {
    codepoints: [8897],
    character: '⋁',
  },
  '&xwedge;': {
    codepoints: [8896],
    character: '⋀',
  },
  '&yacute': {
    codepoints: [253],
    character: 'ý',
  },
  '&yacute;': {
    codepoints: [253],
    character: 'ý',
  },
  '&yacy;': {
    codepoints: [1103],
    character: 'я',
  },
  '&ycirc;': {
    codepoints: [375],
    character: 'ŷ',
  },
  '&ycy;': {
    codepoints: [1099],
    character: 'ы',
  },
  '&yen': {
    codepoints: [165],
    character: '¥',
  },
  '&yen;': {
    codepoints: [165],
    character: '¥',
  },
  '&yfr;': {
    codepoints: [120118],
    character: '𝔶',
  },
  '&yicy;': {
    codepoints: [1111],
    character: 'ї',
  },
  '&yopf;': {
    codepoints: [120170],
    character: '𝕪',
  },
  '&yscr;': {
    codepoints: [120014],
    character: '𝓎',
  },
  '&yucy;': {
    codepoints: [1102],
    character: 'ю',
  },
  '&yuml': {
    codepoints: [255],
    character: 'ÿ',
  },
  '&yuml;': {
    codepoints: [255],
    character: 'ÿ',
  },
  '&zacute;': {
    codepoints: [378],
    character: 'ź',
  },
  '&zcaron;': {
    codepoints: [382],
    character: 'ž',
  },
  '&zcy;': {
    codepoints: [1079],
    character: 'з',
  },
  '&zdot;': {
    codepoints: [380],
    character: 'ż',
  },
  '&zeetrf;': {
    codepoints: [8488],
    character: 'ℨ',
  },
  '&zeta;': {
    codepoints: [950],
    character: 'ζ',
  },
  '&zfr;': {
    codepoints: [120119],
    character: '𝔷',
  },
  '&zhcy;': {
    codepoints: [1078],
    character: 'ж',
  },
  '&zigrarr;': {
    codepoints: [8669],
    character: '⇝',
  },
  '&zopf;': {
    codepoints: [120171],
    character: '𝕫',
  },
  '&zscr;': {
    codepoints: [120015],
    character: '𝓏',
  },
  '&zwj;': {
    codepoints: [8205],
    character: '\u200D',
  },
  '&zwnj;': {
    codepoints: [8204],
    character: '\u200C',
  },
}

export default htmlEntities
