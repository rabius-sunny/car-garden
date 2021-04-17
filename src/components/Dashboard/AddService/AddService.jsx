import axios from 'axios'
import { useForm } from "react-hook-form";
import { useState } from "react"
import Sidebar from "../../Shared/Sidebar/Sidebar"
import { useHistory } from 'react-router';

const AddService = () => {

    const { register, handleSubmit, errors } = useForm();
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
                <Sidebar />
                <div className="col-md-10">
                    <h3 className="py-4 section__header__primary">Add Ride</h3>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)} className="m-5 p-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" defaultValue="Car Name" {...register('name')} />

                                    <input type="number" defaultValue="cost per day" {...register('price')} />

                                    <input type="text" defaultValue="car type" {...register('carType')} />

                                    <input type="number" name="passengers" defaultValue="000" {...register('passengers')} />
                                </div>

                                <div className="col-md-6">
                                    <input type="file" onChange={handleImage} />

                                    <input type="text" defaultValue="geer type" {...register('geerType')} />

                                    <input type="text" defaultValue="fuel type" {...register('fuelType')} />
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
