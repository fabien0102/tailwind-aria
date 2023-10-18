import plugin from "tailwindcss/plugin";
import { PluginAPI } from "tailwindcss/types/config";

export function tailwindAria(addVariant: PluginAPI["addVariant"]) {
  const booleans = [
    "atomic",
    "busy",
    "checked",
    "current",
    "disabled",
    "expanded",
    "grabbed",
    "haspopup",
    "hidden",
    "invalid",
    "live",
    "modal",
    "multiline",
    "multiselectable",
    "pressed",
    "readonly",
    "required",
    "selected",
  ];

  for (const attribute of booleans) {
    addVariant(`aria-${attribute}`, `[aria-${attribute}="true"]&`);
    addVariant(
      `peer-aria-${attribute}`,
      `:merge(.peer)[aria-${attribute}="true"] ~ &`
    );
    addVariant(
      `group-aria-${attribute}`,
      `:merge(.group)[aria-${attribute}="true"] &`
    );
  }

  const enumerables = {
    autocomplete: ["both", "inline", "list", "none"],
    current: ["date", "location", "page", "step", "time"],
    dropeffect: ["copy", "execute", "link", "move", "none", "popup"],
    haspopup: ["dialog", "grid", "listbox", "menu", "tree"],
    orientation: ["horizontal", "undefined", "vertical"],
    relevant: ["additions", "all", "removals", "text"],
    sort: ["ascending", "descending", "none", "other"],
  };

  for (const [attribute, values] of Object.entries(enumerables)) {
    for (const value of values) {
      addVariant(
        `aria-${attribute}-${value}`,
        `[aria-${attribute}="${value}"]&`
      );
      addVariant(
        `peer-aria-${attribute}-${value}`,
        `:merge(.peer)[aria-${attribute}="${value}"] ~ &`
      );
      addVariant(
        `group-aria-${attribute}-${value}`,
        `:merge(.group)[aria-${attribute}="${value}"] &`
      );
    }
  }
}

export default plugin(({ addVariant }) => tailwindAria(addVariant));
