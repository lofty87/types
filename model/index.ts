/**
 * @name ModelPartial
 * * advanced Partial
 * * mongoose model based
 * * contains some mongoose opertor syntax
 *
 * ! limit depth of model schema to a maximum of 3
 */

type ComparisonOperators = {
  $eq?: number | string;
  $ne?: number | string;
  $in?: number[] | string[];
  $nin?: number[] | string[];
  $gt?: number;
  $gte?: number;
  $lt?: number;
  $lte?: number;
};

type Model<M> = {
  [K1 in keyof M]?:
    | M[K1]
    | {
        [K2 in keyof M[K1]]?:
          | M[K1][K2]
          | {
              [K3 in keyof M[K1][K2]]?: M[K1][K2][K3] | ComparisonOperators;
            }
          | ComparisonOperators;
      }
    | ComparisonOperators;
};

type LogicalOperators<M> = {
  $and?: Model<M>;
  $or?: Model<M>;
  $nor?: Model<M>;
  $unset?: Model<M>;
};

type TextSearch = {
  $text?: {
    $search: string;
  };
};

export type ModelPartial<M> =
  | Model<M>
  | LogicalOperators<M>
  | TextSearch;
