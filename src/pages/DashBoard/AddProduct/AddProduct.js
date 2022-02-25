import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory()

    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added new product!')
                    history.replace('/explore-cars')
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="section-title text-center mb-10">
                    <h2 className='lg:text-5xl text-3xl mt-5 lg:mt-0 capitalize font-semibold'>Add details to add new product</h2>
                    <span className='block w-28 mt-3 h-1 bg-red-500 mx-auto'></span>
                    <span className='block w-20 mt-1 h-1 bg-yellow-500 mx-auto'></span>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("name", { required: true })} placeholder='Product title' /> <br />
                    <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("price", { required: true })} placeholder='Product Price' type='number' /> <br />
                    {/* <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("cc", { required: true })} placeholder='Car cc' type='number' /> <br />
                    <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("type", { required: true })} placeholder='Car type' /> <br />
                    <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("year", { required: true })} placeholder='Car released year' type='number' /> <br /> */}
                    <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("body", { required: true })} placeholder='Product description' /> <br />
                    <input className='border-b-2 w-full border-red-400
                     pl-5 mb-5 rounded-full py-3
                      outline-none' {...register("img", { required: true })} placeholder='Product Image Link' type='url' /> <br />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='border-2 border-red-400 px-14 font-semibold text-xl cursor-pointer rounded-full bg-white mx-auto block text-red-400 py-2' type="submit" value='Add New Product' />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;