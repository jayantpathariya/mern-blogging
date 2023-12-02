import { Link, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Input from "../../components/input/input.component";
import googleLogo from "/images/google.png";
import AnimationWrapper from "../../components/animation-wrapper";
import { Controller, useForm } from "react-hook-form";
import { SignInSchema } from "../../lib/validation";

import styles from "./sign-in.module.css";

const SignIn = () => {
  const { pathname } = useLocation();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignInSchema>) => {
    console.log(data);
  };

  return (
    <AnimationWrapper keyValue={pathname}>
      <div className={`hScreen ${styles.section}`}>
        <form
          className={styles.form}
          {...form}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h1 className={styles.heading}>Sign In</h1>

          <Controller
            name="email"
            control={form.control}
            render={({ field }) => (
              <Input icon="Mail" type="text" placeholder="Email" {...field} />
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field }) => (
              <Input
                icon="KeyRound"
                type="password"
                placeholder="Password"
                {...field}
              />
            )}
          />

          <button className={`btnDark btnLarge ${styles.btnSubmit}`}>
            Sign In
          </button>

          <div className={styles.divider}>
            <hr className={styles.dividerLine} />
            <p className={styles.dividerText}>Or</p>
            <hr className={styles.dividerLine} />
          </div>

          <button className={`btnDark btnSmall ${styles.googleBtn}`}>
            <img src={googleLogo} alt="Google logo" />
            <p className={styles.googleText}>Continue with google</p>
          </button>

          <p className={styles.formText}>
            Don't have an account?{" "}
            <Link to="/sign-up" className={styles.formLink}>
              Join us today"
            </Link>
          </p>
        </form>
      </div>
    </AnimationWrapper>
  );
};

export default SignIn;
