import { Field, Form, Formik } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import css from "./SearchBar.module.css"

export default function SearchBar({ onSearch }) {
    return (
        <div className={css.searchBar}>
            <div>
                <Toaster
                position="top-right"
                reverseOrder={true}/>
            </div>
        <Formik
            initialValues={{ query: "" }}
            onSubmit={(values, action) => {
                if (values.query.trim() === "") {
                    toast.error("You need to enter data to start the search");   
                } else {
                    onSearch(values.query);
                }
                action.resetForm();
            }}
        >
                <Form>
                <Field
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    className={css.input}>
                    </Field>
                <button type="submit" className={css.searchBtn}>Search</button>
            </Form>
            </Formik>
            </div>
    )
}