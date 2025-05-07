import * as v from "valibot";

export const LoginSchema = v.object({
	name: v.pipe(v.string(), v.nonEmpty("This field is required")),
	email: v.pipe(v.string(), v.nonEmpty("This field is required"), v.email("The email address is not valid")),
	password: v.pipe(
		v.string(),
		v.nonEmpty("This field is required"),
		v.minLength(8, "The password must be at least 8 characters long"),
	),
});
