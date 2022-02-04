import {
  ConstraintInput,
} from "../../../mutations/mql/MqlMutationTypes";

const EMPTY_CONSTRAINT: ConstraintInput = { constraint: null };

// This filters out invalid WHERE clauses the consequence of janky form state;
const clearEmptyConstraints = (where?: ConstraintInput | null | undefined) => {
  if (!where) return EMPTY_CONSTRAINT;
  if (where.And) {
    const newAnd = where.And.filter((val) => (val.values || []).length > 0);
    return newAnd.length > 0 ? { ...where, And: newAnd } : EMPTY_CONSTRAINT;
  }
  // if (where.Or) {
  //   const newOr = where.Or.filter((val) => (val.values || []).length > 0);
  //   return newOr.length > 0 ? { ...where, Or: newOr } : EMPTY_CONSTRAINT;
  // }

  return where;
}

export default clearEmptyConstraints;
