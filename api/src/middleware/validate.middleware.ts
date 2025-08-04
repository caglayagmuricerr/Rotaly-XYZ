import { NextFunction, Request, Response } from "express";
import { z, ZodSchema } from "zod";

export enum ValidationType {
  BODY = "body",
  PARAMS = "params",
  QUERY = "query",
}

export const validate = (
  schema: ZodSchema,
  type: ValidationType = ValidationType.BODY
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const dataToValidate = req[type];

      const validatedData = schema.parse(dataToValidate);

      req[type] = validatedData;

      next();
    } catch (error) {
      next(error);
    }
  };
};

export const validateBody = (schema: ZodSchema) =>
  validate(schema, ValidationType.BODY);

export const validateParams = (schema: ZodSchema) =>
  validate(schema, ValidationType.PARAMS);

export const validateQuery = (schema: ZodSchema) =>
  validate(schema, ValidationType.QUERY);

export const validateId = validate(
  z.object({
    id: z.string().uuid("Geçerli bir UUID formatı gerekli"),
  }),
  ValidationType.PARAMS
);
