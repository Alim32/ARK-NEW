'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { ScrollVisibility } from '../ScrollVisibility';
import btnIconPlusCircle from '../../images/icons/icon-plus-circle-outline.svg';
import Select from 'react-select';

const customStyles = {
  control: (provided: any, state: { isFocused: any; }) => ({
    ...provided,
    minHeight: '54px',
    width: '100%',
    borderRadius: '9999px',
    borderColor: state.isFocused ? '#FC8A34' : 'transparent',
    outline: state.isFocused ? '#FC8A34' : 'transparent',
    boxShadow: state.isFocused ? '#FC8A34' : 'transparent',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#685757',
    background: '#efecec',
    transition: 'border-color 0.2s ease',
    '&:hover': {
      borderColor: '#FC8A34',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: '#fff',
  }),
  option: (provided: any, state: { isSelected: any; }) => ({
    ...provided,
    fontSize: '15px',
    backgroundColor: state.isSelected ? '#EFECEC' : '#fff',
    color: state.isSelected ? '#685757' : '#685757',
    '&:hover': {
      backgroundColor: '#EFECEC',
    },
  }),
};

const CustomSelect: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const options = [
    { value: '', label: 'Country', isDisabled: true },
    { value: 'United States', label: 'United States' },
    { value: 'Canada', label: 'Canada' },
    { value: 'Mexico', label: 'Mexico' },
  ];

  const selectedOption = options.find((option) => option.value === selectedCountry);

  return (
    <Select
    id="country"
    name="country"
    placeholder="Country"
    styles={customStyles}
    value={selectedOption}
    onChange={(selectedOption) => setSelectedCountry(selectedOption?.value || null)}
    options={options}
    />
  );
};



const FormSection = () => {
  const [selectedCountry, setSelectedCountry] = React.useState('');

  return (
    <div className='bg-white py-20 pb-40' id='form'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-20'>
          <div className="w-full">
            <ScrollVisibility>
              <h2 className='h2 mb-5'>
                Get alerts on new <br></br> <span className='color-orange'>releases & more</span>
              </h2>
              <p className='subtitle'>
                Join our newsletter to stay in the know about all things Karrier One.
              </p>
            </ScrollVisibility>
          </div>
          <div className="w-full lg:min-w-[600px]">
            <ScrollVisibility>
            <form action="https://one.us10.list-manage.com/subscribe/post?u=0991a42d2d34d39b6d4c742f7&amp;id=3ad193a615&amp;f_id=009cc7e5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="mce-FNAME" className="block text-sm font-medium leading-6 ">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="FNAME"
                        required
                        placeholder='First name'
                        id="mce-FNAME"
                        autoComplete="given-name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="mce-LNAME" className="block text-sm font-medium leading-6 ">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="LNAME"
                        required
                        placeholder='Last name'
                        id="mce-LNAME"
                        autoComplete="family-name"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="mce-EMAIL" className="block text-sm font-medium leading-6 ">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="mce-EMAIL"
                        name="EMAIL"
                        required
                        placeholder='Enter your email'
                        type="email"
                        autoComplete="email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="mce-PHONE" className="block text-sm font-medium leading-6 ">
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="mce-EMAIL"
                        name="PHONE"
                        required
                        placeholder='Enter your phone number'
                        type="text"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {/* <div className="sm:col-span-3">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 ">
                      Country
                    </label>
                    <div className="mt-2">
                      <CustomSelect/>
                    </div>
                  </div> */}
                </div>
                <div><input type="hidden" name="tags" value="13521483" /></div>
                {/* <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 ">
                      How would you like to participate in the Karrier One network?
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        placeholder='Your message…'
                        rows={10}
                        className="form-control !rounded-[20px]"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                </div> */}

                <div className="mt-8">
                  <button
                    type="submit"
                    className="btn-orange inline-flex gap-3 w-full justify-center"
                  >
                    Sign up
                    <Image
                      src={btnIconPlusCircle}
                      width={24}
                      alt='icon-brick-wall-outline'
                    />
                  </button>
                </div>

                <h4 className='py-5 text-f-orange hidden'>
                  You’re on the list! You’ll be the first to know about any Karrier One updates.
                </h4>

              </form>
            </ScrollVisibility>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
