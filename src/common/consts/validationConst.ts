/**Constant strings used as validation error. */
export const validationConst = {
    REQUIRED: "{0} is required" as const,
    NUMBER: "{0} must be a number" as const,
    OUTOFLIMIT: "{0} is out of limit ({1})" as const,
    MORETHAN: "{0} must be greater than {1}" as const,
    MAXLENGTH: "Maximum {0} characters" as const
};