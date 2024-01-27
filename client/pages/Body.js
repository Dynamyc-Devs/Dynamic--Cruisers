// pages/Body.js
import React from 'react';
import Image from 'next/image';
import { PiWarehouseBold } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { GoCodeReview } from 'react-icons/go';
import { IoMdLogIn } from 'react-icons/io';
import { useRouter } from 'next/router';
import Background1 from '../Public/_background/Background1.jpg';

function Body() {
  const router = useRouter();

  const handleLoginClick = () => {
    // Redirect to the login page
    router.push('/auth/login');
  };

  const handleSignupClick = () => {
    // Redirect to the signup page
    router.push('/auth/signup');
  };

  return (
    <div className="body">
      <div className="body__image">
        <Image
          src={Background1}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="nav__links">
        <div className="search__bar">
          <div className="select__brands">
            <select name="cars" id="cars">
              <option value="select">Select Brand</option>
              <option value="cadillac">Cadillac</option>
              <option value="toyota">Toyota</option>
              <option value="mercedes">Mercedes</option>
              <option value="porshe">Porsche</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="nissan">Nissan</option>
              <option value="jeep">Jeep</option>
              <option value="rolls-royce">Rolls-Royce</option>
              <option value="bmw">BMW</option>
            </select>
          </div>
        </div>
        <div className="nav__links__container" onClick={handleLoginClick}>
          <div className="nav__links__container__icon">
            <IoMdLogIn size={30} />
          </div>
          <div className="nav__links__container__text">
            <h3>Login</h3>
          </div>
        </div>
        <div className="nav__links__container" onClick={handleSignupClick}>
          <div className="nav__links__container__icon">
            <IoMdLogIn size={30} />
          </div>
          <div className="nav__links__container__text">
            <h3>Signup</h3>
          </div>
        </div>
        <div className="nav__links__container">
          <div className="nav__links__container__icon">
            <PiWarehouseBold size={30} />
          </div>
          <div className="nav__links__container__text">
            <h3>Dealerships</h3>
          </div>
        </div>
        <div className="nav__links__container">
          <div className="nav__links__container__icon">
            <IoCarSportOutline size={30} />
          </div>
          <div className="nav__links__container__text">
            <h3>Cars on Sale</h3>
          </div>
        </div>
        <div className="nav__links__container">
          <div className="nav__links__container__icon">
            <GoCodeReview size={30} />
          </div>
          <div className="nav__links__container__text">
            <h3>Car Reviews</h3>
          </div>
        </div>
      </div>

      <div className="body__container">
        <div className="body__container__text">
          <h1>Used and New cars for sale in Nairobi...</h1>
          <br />
          <h3>...Shop by brand...</h3>
        </div>
      </div>
    </div>
  );
}

export default Body;
