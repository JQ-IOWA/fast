---
id: fast-anchored-region
title: fast-anchored-region
sidebar_label: fast-anchored-region
custom_edit_url: https://github.com/microsoft/fast/edit/master/packages/web-components/fast-foundation/src/anchored-region/README.md
---

##  Applying custom styles

```ts
import { customElement } from "@microsoft/fast-element";
import { AnchoredRegion, AnchoredRegionTemplate as template } from "@microsoft/fast-foundation";
import { AnchoredRegionStyles as styles } from "./anchored-region.styles";

@customElement({
    name: "fast-anchored-region",
    template,
    styles,
})
export class FASTAnchoredRegion extends AnchoredRegion {}
```