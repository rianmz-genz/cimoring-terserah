import React from 'react'

const Input = ({value, onChange, label, placeholder, id, type = "text", width}) => {
  return (
    <div className={`${width} relative mb-3`} data-te-input-wrapper-init>
    <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
      type={type}
      className="peer block min-h-[auto] w-full rounded border-0 bg-white/10 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-white  motion-reduce:transition-none text-white placeholder:text-white/40"
      id={id}
       />
    <label
      for={id}
      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] transition-all duration-200 ease-out -translate-y-[0.9rem] scale-[0.8] text-white  motion-reduce:transition-none "
      >{label}
    </label>
  </div>
  )
}

export default Input
