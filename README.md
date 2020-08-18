# @lofty87/types

this module is for **type definition** only in the lofty87 project

## 1. Installation

```bash
npm install --save @lofty87/types
```

## 2. Usage

```ts
import {
  AsyncFunction,
  Function,
  ModelPartial,
  Object
} from '@lofty87/types';
```

* ModelPartial
  * advanced Partial
  * mongoose model based
  * contains some mongoose opertor syntax
  * limit depth of model schema to a maximum of 3