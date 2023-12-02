import { Link, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Input from "../../components/input/input.component";
import googleLogo from "/images/google.png";
import AnimationWrapper from "../../components/animation-wrapper";
import { Controller, useForm } from "react-hook-form";
import { SignUpSchema } from "../../lib/validation";

import styles from "./sign-up.module.css";

const SignUp = () => {
  const { pathname } = useLocation();

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignUpSchema>) => {
    console.log(data);
  };

  console.log(form.formState.errors);

  return (
    <AnimationWrapper keyValue={pathname}>
      <div className={`hScreen ${styles.section}`}>
        <form
          className={styles.form}
          {...form}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h1 className={styles.heading}>Join us today</h1>

          <Controller
            name="fullname"
            control={form.control}
            render={({ field }) => (
              <Input
                icon="UserRound"
                type="text"
                placeholder="Full Name"
                {...field}
              />
            )}
          />

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
            Sign Up
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
            Already a member?
            <Link to="/sign-in" className={styles.formLink}>
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </AnimationWrapper>
  );
};

export default SignUp;
