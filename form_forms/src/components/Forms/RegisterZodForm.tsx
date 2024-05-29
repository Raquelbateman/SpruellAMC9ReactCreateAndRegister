import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    firstname: z.string().min(3),
    lastname: z.string().min(3)
})

type FormData = z.infer<typeof schema>
// interface FormData{
//     firstname:string,
//     lastname:string

// }


const RegisterZodForm = () => {
 
     const {register, handleSubmit,formState:{errors}} = useForm<FormData>()
    console.log(errors);

    const onHelpSubmit = (data:FieldValues) => {
      console.log(data);
    }
    
    return (
      <>


        <form onSubmit={handleSubmit(onHelpSubmit)}>
          <div className="mb-3 myContainer">
          <h1 className="text-center" id="signUp">Register</h1>
            <div className="inputFields">
            <div className="row">
              <div className="col">
                <label  className="form-label">
                  First Name
                </label>
                <input {...register('firstname')} type="text" id="firstName" className="form-control" />
                {errors.firstname?.type === 'required'&& <p className="text-danger">Name field is required</p>}
                {errors.firstname?.type === 'minLength' && <p className="text-danger">Name must be atleast 3 characters</p>}
              </div>
              <div className="col">
                <label className="form-label">
                  Last Name
                </label>
                <input {...register('lastname')} type="text" id="lastName" className="form-control" />
                {errors.lastname?.type === 'required' && <p className="text-danger">Name field is required</p>}
                {errors.lastname?.type === 'minLength' && <p className="text-danger">Name must be atleast 3 characters</p>}
              </div>
            </div>
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input {...register('email')} type="email" id="email" className="form-control" />
            <label htmlFor="" className="form-label">
              Password
            </label>
            <input {...register('password')} type="password" id="password" className="form-control" />
            <label htmlFor="" className="form-label">
              Confirm Password
            </label>
            <input {...register('confirmpassword')}type="password" id="confirmPassword" className="form-control" />
            <button className="mt-3 btn btn-primary"  id="submitButton" type="submit">
              Submit
            </button>
            </div>
          </div>
        </form>
      </>
    );
}
export default RegisterZodForm;