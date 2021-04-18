import axios from 'axios'
import { useForm } from "react-hook-form";
import { useContext, useState } from "react"
import Sidebar from "../../../Shared/Sidebar/Sidebar"
import { useHistory } from 'react-router';
import { AdminContext } from '../../../../App';

const AddService = () => {

    const [isAdmin, setIsAdmin] = useContext(AdminContext)
    const { register, handleSubmit } = useForm();
    const [image, setImage] = useState(null)
    const history = useHistory()

    const handleImage = e => {
        const image = new FormData();
        image.set('key', '93806700d73c6e0cf4767ba7d1804c67');
        image.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            image)
            .then(res => {
                setImage(res.data.data.display_url);
            })
            .catch(err => console.log(err));
    }
    const onSubmit = data => {
        const { name, price, carType, fuelType, geerType, passengers } = data
        const rideData = {
            name: name,
            price: price,
            type: carType,
            geer: geerType,
            fuel: fuelType,
            passengers: passengers,
            image: image
        }
        const url = 'https://car-garden.herokuapp.com/addCar'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(rideData)
        })
            .then(res => console.log('ride uploaded succesfully'))
            .catch(err => console.log(err))

        alert('A New Ride Uploaded Succesfully')
        history.push('/')

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar isAdmin={isAdmin} />
                <div className="col-md-10">
                    <h3 className="py-4 section__header__primary">Add Ride</h3>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)} className="my-2 p-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="">Car Name :</label>
                                    <input type="text" className="form-control w-75" defaultValue="Car Name" {...register('name')} /> <br/>

                                    <label htmlFor="">Rental Charge :</label>
                                    <input type="number" className="form-control w-75" defaultValue="000" {...register('price')} /> <br/>

                                    <label htmlFor="">Car Type :</label>
                                    <input type="text" className="form-control w-75" defaultValue="car type" {...register('carType')} /> <br/>

                                    <label htmlFor="">Passengers Ability</label>
                                    <input type="number" className="form-control w-75" name="passengers" defaultValue="00" {...register('passengers')} /> <br/>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="">Car Thumbnail</label>
                                    <input type="file" className="form-control w-75" onChange={handleImage} /> <br/>

                                    <label htmlFor="">Geer Type</label>
                                    <input type="text" className="form-control w-75" defaultValue="geer type" {...register('geerType')} /> <br/>

                                    <label htmlFor="">Fuel Type</label>
                                    <input type="text"  className="form-control w-75"defaultValue="fuel type" {...register('fuelType')} /> <br/>
                                </div>
                            </div>
                            <input type="submit" value="Add Ride" className="btn btn-primary" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddService
