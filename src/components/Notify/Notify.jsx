'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notify() {
    const clearWaitingQueue = () => {
        toast.clearWaitingQueue();
    }

    let customId = "success1";

    let notify = () => {
        toast.success("Welcome To AidNAssist", {
            pauseOnFocusLoss: false
        }, {
            toastId: customId
        }, {
            theme: "dark"
        });
    }

    const [cNotify, setCNotify] = useState(notify);

    const Updating = () => {
        notify = () => {
            toast(<div className='flex justify-center items-center'>
                <Image height={40} width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW1-SAb8RcvRZI9ibZ1ta_tgmspI5iGeQPmTq0eWNXMFlHDZsrqT7QvpOjSIU8VzcJYow&usqp=CAU" alt="" />
                <div>
                    <p>Someone Donate Money To Help The Poor</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            }, {
                toastId: customId
            },
                {
                    theme: "dark"
                });
            toast(<div className='flex justify-center items-center'>
                <Image height={40} width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx742e_tPJFkBG6OTW-XT-4cgyF5GeCFjXvpKgSd19behUqsKgw76d3pwUXamhwJhc3jg&usqp=CAU" alt="" />
                <div>
                    <p>Someone Send Money To Buy Food For Poor</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            }, {
                toastId: customId
            }, {
                theme: "dark"
            });
            toast(<div className='flex justify-center items-center'>
                <Image height={40} width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpxmfh_H9RqcWpH_m4Q5WNLO4Yuuv5rRV5VHYC9oIoxO32aO3cOxJR2-UE9PqAoXaO6g&usqp=CAU" alt="" />
                <div>
                    <p>Someone Give Donation To Buy Cloth For Helpless People</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            },
                { toastId: customId }, {
                theme: "dark"
            });
            toast(<div className='flex justify-center items-center'>
                <Image height={40} width={40} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpxmfh_H9RqcWpH_m4Q5WNLO4Yuuv5rRV5VHYC9oIoxO32aO3cOxJR2-UE9PqAoXaO6g&usqp=CAU" alt="" />
                <div>
                    <p>Someone Give Donation To Give Clear Water For Helpless People</p>
                    <small className='text-blue-400'>a few minutes ago</small>
                </div>
            </div>, {
                pauseOnFocusLoss: false
            },
                { toastId: customId }, {
                theme: "dark"
            });
        }
        setCNotify(notify);
    }

    setTimeout(Updating, 15000)
    return (
        <div>
            <ToastContainer
                position='bottom-left'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
                dismissAll={25000}
            />
        </div>
    );
}
export default Notify;