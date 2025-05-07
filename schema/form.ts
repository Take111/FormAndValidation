import * as v from "valibot";

export const LoginSchema = v.object({
	name: v.pipe(v.string(), v.nonEmpty("この項目は必須です")),
	email: v.pipe(v.string(), v.nonEmpty("この項目は必須です"), v.email("メールアドレスの形式が正しくありません")),
	password: v.pipe(
		v.string(),
		v.nonEmpty("この項目は必須です"),
		v.minLength(8, "パスワードは8文字以上で入力してください"),
	),
});
