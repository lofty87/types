/**
 * @name ModelPartial
 * * advanced Partial
 * * mongoose model based
 * * contains some mongoose opertor syntax
 *
 * ! limit depth of model schema to a maximum of 3
 */

type Operators = {
  $in: number[] | string[];
};

type Model<M> = {
  [K1 in keyof M]?:
    | M[K1]
    | {
        [K2 in keyof M[K1]]?:
          | M[K1][K2]
          | {
              [K3 in keyof M[K1][K2]]?: M[K1][K2][K3] | Operators;
            }
          | Operators;
      }
    | Operators;
};

type TextSearch = {
  $text?: {
    $search: string;
  };
};

export type ModelPartial<M> =
  | {
      $unset?: Model<M>;
    }
  | Model<M>
  | TextSearch;
