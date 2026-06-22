/* @ds-bundle: {"format":3,"namespace":"TogetherAIDesignSystem_e5d1c8","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"TogglePill","sourcePath":"components/data/TogglePill.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Eyebrow","sourcePath":"components/navigation/Eyebrow.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"cd15d8a2d3c2","components/buttons/IconButton.jsx":"7c79fd5715f7","components/data/Badge.jsx":"450931a6d74b","components/data/DataTable.jsx":"9cfef68b540a","components/data/TogglePill.jsx":"99e806cac338","components/forms/Input.jsx":"9852edbb0d67","components/navigation/Eyebrow.jsx":"154b00c53c51","components/navigation/NavBar.jsx":"df0bd4b5afd6","components/surfaces/Card.jsx":"422ea832f9e5","components/surfaces/StatCard.jsx":"e4aa5ee36456","ui_kits/together-website/app.jsx":"6dbdbb2d5d42","ui_kits/together-website/sections.jsx":"7c9785017388"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TogetherAIDesignSystem_e5d1c8 = window.TogetherAIDesignSystem_e5d1c8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's CTA pills. Label is always uppercase mono.
 * Slightly-rounded rectangle (4px), never a full pill, never a shadow.
 *
 * variant:
 *   primary        — black pill, the single conversion CTA (default)
 *   secondary-mint — mint pill, HERO contexts only
 *   secondary-white— white pill, paired with mint in the hero
 *   ghost-on-dark  — translucent fill for dark bands
 *   outline        — hairline-bordered white button (pricing / toggles)
 */
function Button({
  variant = 'primary',
  type = 'button',
  href,
  disabled = false,
  fullWidth = false,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 'var(--mono-button-size)',
    lineHeight: 'var(--mono-button-line)',
    letterSpacing: 'var(--mono-button-track)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: 'var(--space-sm) var(--space-2xl)',
    minHeight: 44,
    /* touch target */
    border: '1px solid transparent',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'opacity 120ms ease, background-color 120ms ease',
    boxSizing: 'border-box',
    WebkitFontSmoothing: 'antialiased'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    'secondary-mint': {
      background: 'var(--color-accent-mint)',
      color: 'var(--color-ink)'
    },
    'secondary-white': {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)'
    },
    'ghost-on-dark': {
      background: 'var(--color-surface-dark-soft)',
      color: 'var(--color-on-dark)'
    },
    outline: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline)',
      borderRadius: 'var(--radius-xs)'
    }
  };
  const finalStyle = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    style: finalStyle
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — the floating chat-launcher orb. The ONLY fully-pill shape
 * in the system. Renders 44×44 minimum with the brand's single soft drop.
 */
function IconButton({
  'aria-label': ariaLabel = 'Open chat',
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    padding: 0,
    border: 'none',
    borderRadius: 'var(--radius-full)',
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-orb)',
    transition: 'opacity 120ms ease'
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — inline tag pill. Hairline-bordered on light surfaces; on dark
 * bands it fills with the dark soft surface and drops the border.
 *
 * tone: 'neutral' (default, light) | 'on-dark'
 */
function Badge({
  tone = 'neutral',
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--color-hairline)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)'
    },
    'on-dark': {
      background: 'var(--color-surface-dark-soft)',
      color: 'var(--color-on-dark)',
      border: '1px solid transparent'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'var(--body-md-size)',
    lineHeight: 'var(--body-md-line)',
    letterSpacing: 'var(--body-md-track)',
    padding: 'var(--space-xxs) var(--space-sm)',
    borderRadius: 'var(--radius-sm)',
    ...tones[tone]
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * DataTable — the pricing serverless-inference table. Header row fills with
 * hairline + uppercase-mono labels; body rows are display-sans, separated by
 * 1px hairline bottom borders. Reads like a sheet, not a marketing component.
 *
 * columns: [{ key, label, align }]
 * rows:    [{ [key]: node }]  — first column typically the model name.
 */
function DataTable({
  columns = [],
  rows = [],
  style,
  ...rest
}) {
  const cellPad = 'var(--space-md) var(--space-lg)';
  const headStyle = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 'var(--mono-eyebrow-size)',
    lineHeight: 'var(--mono-eyebrow-line)',
    letterSpacing: 'var(--mono-eyebrow-track)',
    textTransform: 'uppercase',
    color: 'var(--color-body)',
    background: 'var(--color-hairline)',
    padding: cellPad,
    textAlign: 'left'
  };
  const bodyCell = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'var(--body-md-size)',
    lineHeight: 'var(--body-md-line)',
    letterSpacing: 'var(--body-md-track)',
    color: 'var(--color-ink)',
    padding: cellPad,
    borderBottom: '1px solid var(--color-hairline)'
  };
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'var(--color-canvas)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      ...headStyle,
      textAlign: c.align || 'left'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      ...bodyCell,
      textAlign: c.align || 'left'
    }
  }, row[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/TogglePill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TogglePill — segmented control (e.g. Standard / Wholesale pricing).
 * A hairline rail holds white (inactive) or black (active) pills with
 * uppercase-mono labels.
 *
 * options: string[] | [{ value, label }]
 * value:   active value
 * onChange(value)
 */
function TogglePill({
  options = [],
  value,
  onChange,
  style,
  ...rest
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const railStyle = {
    display: 'inline-flex',
    gap: 'var(--space-xs)',
    padding: 'var(--space-xs)',
    background: 'var(--color-hairline)',
    borderRadius: 'var(--radius-sm)',
    ...style
  };
  const pill = active => ({
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 'var(--mono-button-size)',
    lineHeight: 'var(--mono-button-line)',
    letterSpacing: 'var(--mono-button-track)',
    textTransform: 'uppercase',
    padding: 'var(--space-sm) var(--space-lg)',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    background: active ? 'var(--color-primary)' : 'var(--color-canvas)',
    color: active ? 'var(--color-on-primary)' : 'var(--color-ink)',
    transition: 'background-color 120ms ease, color 120ms ease'
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: railStyle,
    role: "tablist"
  }, rest), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    role: "tab",
    "aria-selected": o.value === value,
    onClick: () => onChange && onChange(o.value),
    style: pill(o.value === value)
  }, o.label)));
}
Object.assign(__ds_scope, { TogglePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TogglePill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — the brand's form field. White, hairline border, display-sans body,
 * 4px radius. Optional uppercase-mono label above.
 */
function Input({
  label,
  id,
  style,
  ...rest
}) {
  const fieldId = id || (label ? `in-${String(label).toLowerCase().replace(/\s+/g, '-')}` : undefined);
  const wrap = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-sm)'
  };
  const lblStyle = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 'var(--mono-eyebrow-size)',
    lineHeight: 'var(--mono-eyebrow-line)',
    letterSpacing: 'var(--mono-eyebrow-track)',
    textTransform: 'uppercase',
    color: 'var(--color-body)'
  };
  const inputStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'var(--body-md-size)',
    lineHeight: 'var(--body-md-line)',
    letterSpacing: 'var(--body-md-track)',
    color: 'var(--color-ink)',
    background: 'var(--color-canvas)',
    border: '1px solid var(--color-hairline)',
    borderRadius: 'var(--radius-sm)',
    padding: 'var(--space-md) var(--space-lg)',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    ...style
  };
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    style: inputStyle
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: lblStyle
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the uppercase-mono section label that precedes every headline.
 * tone: 'light' (default, on white) | 'dark' (on canvas-dark)
 */
function Eyebrow({
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 500,
    fontSize: 'var(--mono-eyebrow-size)',
    lineHeight: 'var(--mono-eyebrow-line)',
    letterSpacing: 'var(--mono-eyebrow-track)',
    textTransform: 'uppercase',
    color: tone === 'dark' ? 'var(--color-body)' : 'var(--color-body)',
    display: 'block',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NavBar — sticky top nav. Dark on the hero band, switches to light after
 * scroll. Logo left, link row centre, Contact sales + Sign in right.
 *
 * tone:  'dark' (default) | 'light'
 * links: [{ label, href }]
 */
function NavBar({
  tone = 'dark',
  links = [],
  style,
  ...rest
}) {
  const dark = tone === 'dark';
  const bar = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 'var(--space-2xl)',
    padding: 'var(--space-lg) var(--space-3xl)',
    background: dark ? 'var(--color-canvas-dark)' : 'var(--color-canvas)',
    borderBottom: dark ? '1px solid var(--color-divider-dark)' : '1px solid var(--color-hairline)',
    ...style
  };
  const logo = {
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 22,
    letterSpacing: '-0.6px',
    color: dark ? 'var(--color-on-dark)' : 'var(--color-ink)',
    textDecoration: 'none',
    flex: 'none'
  };
  const linkRow = {
    display: 'flex',
    gap: 'var(--space-2xl)',
    alignItems: 'center'
  };
  const link = {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 'var(--body-md-size)',
    letterSpacing: 'var(--body-md-track)',
    color: dark ? 'var(--color-on-dark)' : 'var(--color-ink)',
    textDecoration: 'none',
    opacity: 0.85
  };
  const right = {
    display: 'flex',
    gap: 'var(--space-md)',
    alignItems: 'center',
    flex: 'none'
  };
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: bar
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: logo
  }, "together", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-body)'
    }
  }, ".ai")), /*#__PURE__*/React.createElement("div", {
    style: linkRow
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: link
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: right
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'ghost-on-dark' : 'outline',
    style: {
      minHeight: 36,
      padding: 'var(--space-xs) var(--space-lg)'
    }
  }, "Contact sales"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    style: {
      minHeight: 36,
      padding: 'var(--space-xs) var(--space-lg)'
    }
  }, "Sign in")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — the brand's universal container. Lightly rounded (4px), hairline
 * border, NO shadow. Switches border + text for dark bands.
 *
 * tone: 'light' (default) | 'dark'
 */
function Card({
  tone = 'light',
  children,
  style,
  ...rest
}) {
  const tones = {
    light: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)'
    },
    dark: {
      background: 'var(--color-canvas-dark)',
      color: 'var(--color-on-dark)',
      border: '1px solid var(--color-divider-dark)'
    }
  };
  const base = {
    borderRadius: 'var(--radius-sm)',
    padding: 'var(--pad-card)',
    boxSizing: 'border-box',
    ...tones[tone]
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * StatCard — pastel-tinted stat tile on the white middle band. Big number
 * in display-xl, label in uppercase mono. 32px interior for breathing room.
 *
 * tint: 'mint' (default) | 'periwinkle' | 'peach'
 */
function StatCard({
  value,
  label,
  tint = 'mint',
  style,
  ...rest
}) {
  const tints = {
    mint: 'var(--color-tint-mint)',
    periwinkle: 'var(--color-tint-periwinkle)',
    peach: 'var(--color-tint-peach)'
  };
  const base = {
    background: tints[tint] || tints.mint,
    color: 'var(--color-ink)',
    borderRadius: 'var(--radius-sm)',
    padding: 'var(--pad-stat-card)',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-sm)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-track)',
      fontFeatureSettings: "'ss01' 1"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'var(--mono-eyebrow-size)',
      lineHeight: 'var(--mono-eyebrow-line)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/together-website/app.jsx
try { (() => {
/* Together AI website — pricing, testimonials, footer, and app assembly. */
const _TADS = window.TogetherAIDesignSystem_e5d1c8;
const {
  Button: TButton,
  IconButton: TIconButton,
  Badge: TBadge,
  DataTable: TDataTable,
  TogglePill: TTogglePill,
  Input: TInput,
  Eyebrow: TEyebrow,
  NavBar: TNavBar
} = _TADS;

/* ── Pricing — sub-tabs + toggle + data table. ── */
const PRICING = {
  Standard: [{
    model: 'Llama 3.1 70B Instruct',
    ctx: '128K',
    in: '$0.88',
    out: '$0.88'
  }, {
    model: 'DeepSeek-V3',
    ctx: '128K',
    in: '$1.25',
    out: '$1.25'
  }, {
    model: 'Qwen2.5 72B Instruct',
    ctx: '32K',
    in: '$0.90',
    out: '$0.90'
  }, {
    model: 'Mixtral 8x22B',
    ctx: '64K',
    in: '$1.20',
    out: '$1.20'
  }, {
    model: 'Llama 3.1 8B Instruct',
    ctx: '128K',
    in: '$0.18',
    out: '$0.18'
  }],
  Wholesale: [{
    model: 'Llama 3.1 70B Instruct',
    ctx: '128K',
    in: '$0.54',
    out: '$0.54'
  }, {
    model: 'DeepSeek-V3',
    ctx: '128K',
    in: '$0.85',
    out: '$0.85'
  }, {
    model: 'Qwen2.5 72B Instruct',
    ctx: '32K',
    in: '$0.60',
    out: '$0.60'
  }, {
    model: 'Mixtral 8x22B',
    ctx: '64K',
    in: '$0.80',
    out: '$0.80'
  }, {
    model: 'Llama 3.1 8B Instruct',
    ctx: '128K',
    in: '$0.10',
    out: '$0.10'
  }]
};
function Pricing() {
  const tabs = ['Text', 'Vision', 'Image', 'Audio', 'Video'];
  const [tab, setTab] = React.useState('Text');
  const [mode, setMode] = React.useState('Standard');
  const subTab = active => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 16,
    letterSpacing: '-0.16px',
    padding: 'var(--space-sm) var(--space-lg)',
    borderRadius: 'var(--radius-xs)',
    border: active ? '1px solid var(--color-hairline)' : '1px solid transparent',
    background: active ? 'var(--color-canvas)' : 'transparent',
    color: active ? 'var(--color-ink)' : 'var(--color-body)',
    cursor: 'pointer'
  });
  return /*#__PURE__*/React.createElement("section", {
    className: "band band-light",
    style: {
      paddingTop: 'var(--space-5xl)',
      paddingBottom: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(TEyebrow, null, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    className: "dxl",
    style: {
      marginTop: 'var(--space-lg)',
      maxWidth: 640
    }
  }, "Serverless inference, priced per token"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-3xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-xs)',
      background: 'var(--color-hairline)',
      padding: 'var(--space-xs)',
      borderRadius: 'var(--radius-md)'
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
    style: subTab(t === tab)
  }, t))), /*#__PURE__*/React.createElement(TTogglePill, {
    options: ['Standard', 'Wholesale'],
    value: mode,
    onChange: setMode
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-lg)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden'
    }
  }, tab === 'Text' ? /*#__PURE__*/React.createElement(TDataTable, {
    columns: [{
      key: 'model',
      label: 'Model'
    }, {
      key: 'ctx',
      label: 'Context'
    }, {
      key: 'in',
      label: 'Input $/1M',
      align: 'right'
    }, {
      key: 'out',
      label: 'Output $/1M',
      align: 'right'
    }],
    rows: PRICING[mode]
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5xl)',
      textAlign: 'center'
    },
    className: "bmd muted"
  }, tab, " model pricing \u2014 see the full table on together.ai/pricing."))));
}

/* ── Testimonials — 3-up cards with square portrait crop. ── */
function Testimonials() {
  const items = [{
    name: 'Pika',
    tint: '#c8f6f9',
    quote: 'Together gave us the GPU headroom to ship video generation at scale.',
    stat: 'GENERATIVE VIDEO'
  }, {
    name: 'Cartesia',
    tint: '#bdbbff',
    quote: 'Sub-100ms inference let us build real-time voice agents on open models.',
    stat: 'REAL-TIME VOICE'
  }, {
    name: 'Hedra',
    tint: '#ffd9c2',
    quote: 'Fine-tuning that used to take days now runs in hours on Together.',
    stat: 'CHARACTER AI'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "band band-light",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(TEyebrow, null, "Customers"), /*#__PURE__*/React.createElement("h2", {
    className: "dxl",
    style: {
      marginTop: 'var(--space-lg)'
    }
  }, "AI natives build on Together AI"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-5xl)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.name,
    style: {
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-2xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-sm)',
      background: it.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22
    }
  }, it.name[0]), /*#__PURE__*/React.createElement("p", {
    className: "dmd"
  }, it.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bmd",
    style: {
      fontWeight: 500
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.55px',
      textTransform: 'uppercase',
      color: 'var(--color-body)',
      marginTop: 4
    }
  }, it.stat)))))));
}

/* ── Footer + giant wordmark stencil sign-off. ── */
function Footer() {
  const cols = [{
    head: 'Platform',
    links: ['Inference', 'Fine-tuning', 'GPU Clusters', 'Models']
  }, {
    head: 'Developers',
    links: ['Docs', 'API Reference', 'Pricing', 'Status']
  }, {
    head: 'Company',
    links: ['About', 'Research', 'Careers', 'Blog']
  }, {
    head: 'Connect',
    links: ['X / Twitter', 'GitHub', 'Discord', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "band-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      paddingTop: 'var(--space-section)',
      paddingBottom: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '-0.6px'
    }
  }, "together", /*#__PURE__*/React.createElement("span", {
    className: "muted"
  }, ".ai")), /*#__PURE__*/React.createElement("p", {
    className: "bmd muted",
    style: {
      marginTop: 'var(--space-md)',
      maxWidth: 240
    }
  }, "The AI Native Cloud for building, training, and running generative AI."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement(TButton, {
    variant: "primary"
  }, "Get started now"))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: '0.55px',
      textTransform: 'uppercase',
      color: 'var(--color-body)'
    }
  }, c.head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-lg)'
    }
  }, c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    className: "bmd",
    style: {
      color: 'var(--color-ink)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      lineHeight: 0.8,
      paddingTop: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      color: 'var(--color-hairline)',
      fontSize: '20vw',
      letterSpacing: '-0.04em',
      textAlign: 'center',
      whiteSpace: 'nowrap'
    }
  }, "together.ai")));
}

/* ── Floating chat orb — the only full-pill shape. ── */
function ChatOrb() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement(TIconButton, {
    "aria-label": "Open chat"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 16,
      fontWeight: 500
    }
  }, "\u203A_")));
}

/* ── Scroll-reactive nav: dark over hero, light after. ── */
function App() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    label: 'Platform'
  }, {
    label: 'Models'
  }, {
    label: 'Pricing'
  }, {
    label: 'Research'
  }, {
    label: 'Docs'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(TNavBar, {
    tone: scrolled ? 'light' : 'dark',
    links: links
  })), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(LogoBar, null), /*#__PURE__*/React.createElement(PlatformSection, null), /*#__PURE__*/React.createElement(ResearchBand, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ChatOrb, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/together-website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/together-website/sections.jsx
try { (() => {
/* Together AI website — section components. Composes the design-system
   primitives from the bundle; local sections for layout-specific chrome. */
const TADS = window.TogetherAIDesignSystem_e5d1c8;
const {
  Button,
  IconButton,
  Badge,
  DataTable,
  TogglePill,
  Input,
  Eyebrow,
  NavBar,
  Card,
  StatCard
} = TADS;

/* ── The brand gradient ribbon — the ONLY decorative chrome. Layered
      translucent flowing bands imply depth without leaving the palette. ── */
function Ribbon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 520 460",
    width: "100%",
    style: {
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "bg",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "0.6"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fc4c02"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "52%",
    stopColor: "#ef2cc1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#bdbbff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "bg2",
    x1: "0.1",
    y1: "0",
    x2: "0.9",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fc4c02"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#ef2cc1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#bdbbff"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M40 250 C 140 120, 300 360, 480 150 L 480 250 C 300 460, 140 220, 40 350 Z",
    fill: "url(#bg)",
    opacity: "0.35"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 210 C 150 90, 300 320, 490 120 L 490 200 C 300 400, 150 180, 30 300 Z",
    fill: "url(#bg2)",
    opacity: "0.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 175 C 160 70, 300 280, 480 100 L 480 160 C 300 340, 160 150, 40 250 Z",
    fill: "url(#bg)"
  }));
}

/* ── Hero — dark band, 50/50 split. Headline + CTA cluster left, ribbon right. ── */
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "band band-dark",
    style: {
      paddingTop: 'var(--space-5xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "The AI Native Cloud"), /*#__PURE__*/React.createElement("h1", {
    className: "dxxl",
    style: {
      color: 'var(--color-on-dark)',
      marginTop: 'var(--space-lg)'
    }
  }, "Build what's next on the AI Native Cloud"), /*#__PURE__*/React.createElement("p", {
    className: "blg muted",
    style: {
      marginTop: 'var(--space-lg)',
      maxWidth: 440
    }
  }, "Train, fine-tune, and run inference on 200+ open models \u2014 on GPU clusters built for frontier AI, priced for builders."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-2xl)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-mint"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-white"
  }, "Talk to sales"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Ribbon, null))));
}

/* ── Logo bar — grayscale customer wordmarks in a wrapping flex row. ── */
function LogoBar() {
  const logos = ['Salesforce', 'Zoom', 'The Washington Post', 'Pika', 'Cartesia', 'Hedra'];
  return /*#__PURE__*/React.createElement("div", {
    className: "band-dark",
    style: {
      paddingBottom: 'var(--space-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--color-divider-dark)',
      paddingTop: 'var(--space-3xl)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5xl)',
      alignItems: 'center'
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 20,
      color: '#6b6b80',
      letterSpacing: '-0.4px'
    }
  }, l)))));
}

/* ── Platform band — white. Lead + code-editor mockup + stat tiles. ── */
function PlatformSection() {
  const code = [['from', ' together ', 'import', ' Together'], [], ['client', ' = Together()'], [], ['resp', ' = client.chat.completions.', 'create', '('], ['  model', '=', '"meta-llama/Llama-3.1-70B-Instruct"', ','], ['  messages', '=[{', '"role"', ': ', '"user"', ', ', '"content"', ': ', '"Explain MoE"', '}],'], [')'], ['print', '(resp.choices[', '0', '].message.content)']];
  return /*#__PURE__*/React.createElement("section", {
    className: "band band-light"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "The Together Platform"), /*#__PURE__*/React.createElement("h2", {
    className: "dxl",
    style: {
      marginTop: 'var(--space-lg)',
      maxWidth: 720
    }
  }, "The full stack for AI \u2014 from a single API call to a dedicated cluster"), /*#__PURE__*/React.createElement("p", {
    className: "blg muted",
    style: {
      marginTop: 'var(--space-lg)',
      maxWidth: 560
    }
  }, "One platform for inference, fine-tuning, and training. Start with a serverless endpoint; scale to reserved GPUs when you're ready."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: 'var(--space-3xl)',
      marginTop: 'var(--space-5xl)',
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      lineHeight: '14px',
      letterSpacing: '0.05px',
      color: 'var(--color-on-dark)',
      whiteSpace: 'pre',
      overflowX: 'auto'
    }
  }, code.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#4a4a66',
      width: 24,
      flex: 'none',
      userSelect: 'none'
    }
  }, String(i + 1).padStart(2, ' ')), /*#__PURE__*/React.createElement("span", null, line.length === 0 ? '\u00A0' : line.map((tok, j) => {
    const isStr = /^".*"$/.test(tok);
    const isKw = ['from', 'import', 'print'].includes(tok.trim());
    const isFn = ['create'].includes(tok.trim());
    let color = 'var(--color-on-dark)';
    if (isStr) color = '#bdbbff';else if (isKw) color = '#fc4c02';else if (isFn) color = '#ef2cc1';
    return /*#__PURE__*/React.createElement("span", {
      key: j,
      style: {
        color
      }
    }, tok);
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: '1fr 1fr',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "200+",
    label: "Open models",
    tint: "mint"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "11x",
    label: "Faster fine-tuning",
    tint: "periwinkle"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "99.9%",
    label: "Uptime SLA",
    tint: "peach"
  }))))));
}

/* ── Research band — dark, 4-up card grid. ── */
function ResearchBand() {
  const cards = [{
    tag: 'Kernels',
    title: 'FlashAttention-3',
    body: 'Up to 2x faster attention on Hopper GPUs, now in the inference stack.'
  }, {
    tag: 'Inference',
    title: 'Speculative decoding',
    body: 'Draft-and-verify decoding cuts time-to-first-token on long prompts.'
  }, {
    tag: 'Training',
    title: 'Mixture-of-Agents',
    body: 'Layered open models outperform a single frontier model on AlpacaEval.'
  }, {
    tag: 'Systems',
    title: 'Together Kernel Collection',
    body: 'Hand-tuned CUDA kernels open-sourced for the community.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "band band-dark"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, "Research"), /*#__PURE__*/React.createElement("h2", {
    className: "dxl",
    style: {
      color: 'var(--color-on-dark)',
      marginTop: 'var(--space-lg)',
      maxWidth: 640
    }
  }, "Grounded in cutting-edge research"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-md)',
      marginTop: 'var(--space-5xl)'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    tone: "dark",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "dark"
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    className: "dmd",
    style: {
      color: 'var(--color-on-dark)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "bmd muted",
    style: {
      marginTop: 'auto'
    }
  }, c.body))))));
}
Object.assign(window, {
  Ribbon,
  Hero,
  LogoBar,
  PlatformSection,
  ResearchBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/together-website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.TogglePill = __ds_scope.TogglePill;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
