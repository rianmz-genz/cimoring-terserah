import { editUserApi, getAllUser, getUser } from '@/api/api'
import { Input, PageAdmin, Text } from '@/components'
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete, AiOutlineUserAdd } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'
import {RiEditCircleLine} from 'react-icons/ri'
const AdminUsers = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(()=>{
    getAllUser().then((res)=> {
      console.log(res)
      setUsers(res)
    })
  },[])
  const edit = (id) => {
    getUser(id).then(res=> {
      console.log(res)
      setEmail(res.email)
      setName(res.name)
      setPhone(res.phonenumber)
      setEditId(res._id)
      setPassword(res.password)
    }).catch(err=> console.log(err))
    setIsEdit(true);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editId )
    if(email.length == 0 || phone.length == 0 || name.length == 0)return;
    editUserApi(editId, email, password, name, phone).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    setIsEdit(false)
  }
  return (
    <>
      {isEdit && <div className='w-full fixed bg-white/10 backdrop-blur-md h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='max-w-[1000px] bg-[#752107] px-12 pt-12 pb-8 rounded-xl relative'>
          <FiX onClick={()=> setIsEdit(false)} className='text-xl text-white absolute top-3 right-3 cursor-pointer'/>
          <Text value={"Tambah User"} style={"text-white text-xl absolute top-3 left-4"} />
          <Input 
            width={"w-full my-3"}
            id={"name"}
            label={"Nama"}
            placeholder={"Masukan nama"}
            value={name}
            onChange={(e)=> setName(e.target.value)}
          />
          <Input 
            width={"w-full my-3"}
            id={"email"}
            label={"Email"}
            placeholder={"Masukan Email"}
            value={email}
            type='email'
            onChange={(e)=> setEmail(e.target.value)}
          />
          <Input 
            width={"w-full my-3"}
            id={"phone"}
            label={"Nomor Telepon"}
            placeholder={"Masukan nomor telepon"}
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
          />
          <button type='submit' className='text-white bg-white/20 rounded-sm w-full py-2'>Edit</button>
        </form>
      </div>}
    <PageAdmin title={"Admin - Users"}>
      <div className='w-full flex justify-between mb-6'>
        <Text value={"Semua Pengguna"} style={"text-2xl font-bold"} />
      </div>
    <table className="min-w-full text-left text-sm font-light rounded-sm">
          <thead className="font-medium bg-white/10">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4 ">Nama</th>
              <th scope="col" className="px-6 py-4 ">E-mail</th>
              <th scope="col" className="px-6 py-4 ">Telepon</th>
              <th scope="col" className="px-6 py-4 ">Role</th>
              <th scope="col" className="px-6 py-4 ">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i)=> (
              <tr
                key={i}
                className="transition duration-300 ease-in-out hover:bg-white/5">
                <td className="whitespace-nowrap px-6 py-4 font-medium" title={i+1}>{i + 1}</td>
                <td className="whitespace-nowrap px-6 py-4" title={user.name} >{user.name}</td>
                <td className="whitespace-nowrap px-6 py-4" title={user.email} >{user.email}</td>
                <td className="whitespace-nowrap px-6 py-4" title={user.phonenumber} >{user.phonenumber}</td>
                <td className="whitespace-nowrap px-6 py-4" title={user.role} >{user.role}</td>
                <td className="flex space-x-4 px-6 py-4">
                  <AiOutlineDelete title='Hapus user' className='text-xl text-red-400 cursor-pointer' />
                  <RiEditCircleLine onClick={()=> edit(user._id)} title='Ubah user' className='text-xl text-indigo-400 cursor-pointer' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </PageAdmin>
    </>
  )
}

export default AdminUsers
