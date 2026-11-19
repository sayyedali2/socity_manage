"use client"

import {useState} from 'react'
import {Eye, EyeOff} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Label } from '../ui/label'

export default function LoginForm(){

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        if(!email || !password){
            alert("Please filed this fields!!!!")
            return
        }
        console.log({email, password})
    }

    return(
        <>
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className='space-y-2'>
                <label htmlFor="email">Email Address</label>
                <Input
                id = 'email'
                type = 'email'
                placeholder='name@example.com'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                required
                />
            </div>

            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <label htmlFor="password">Password</label>
                    <button type='button' className='text-sm text-[#183D35] hover:underline'>Forget Password?</button>
                </div>

                <div className='relative'>
                    <input 
                    id='password'
                    type={showPassword? "text": "password"}
                    placeholder='Enter your Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className='pr-10'
                    />
                    <button 
                    type='button'
                    onClick={()=> setShowPassword(!showPassword)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground'
                    aria-label={showPassword? "Hide Password" : "Show Password"}
                    >
                        {showPassword?(<EyeOff size={18}/>):(<Eye size={18}/>)}
                    </button>
                </div>
            </div>

            <Button type='submit' className="w-full bg-[#183D35] hover:bg-[#245448]">
                Sign In
            </Button>
        </form>
        </>
    )
}