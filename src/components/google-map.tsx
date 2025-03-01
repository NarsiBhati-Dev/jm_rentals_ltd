import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5188.302031759914!2d-96.8734246!3d49.4438627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c1b6f84939571f%3A0xd4ba4d25617c06d7!2sJ%26M%20Rentals!5e0!3m2!1sen!2sin!4v1740858102808!5m2!1sen!2sin'
      width='600'
      height='400'
      allowFullScreen={true}
      className={'w-full max-w-xl rounded-md shadow-lg'}
      loading='lazy'
      referrerPolicy={'no-referrer-when-downgrade'}
    ></iframe>
  );
};

export default GoogleMap;
