import { Calendar } from 'react-vant';
import Nav from '@/components/navbar';
import React, { useState, useEffect } from 'react';
import './index.scss'

const DateSelect = ({ setShowDateSelect, onDatesSelected }) => {
    const [dates, setDates] = useState(null);
    const formatter = day => {
        const tableYear = day.date.getFullYear();
        const tableMonth = day.date.getMonth() + 1;
        const tableDate = day.date.getDate();
        const today = new Date();
        const todayYear = today.getFullYear();
        const todayMonth = today.getMonth() + 1;
        const todayDate = today.getDate();

        if (tableYear === todayYear && tableMonth === todayMonth && tableDate === todayDate) {
            day.bottomInfo = '今天';
        }
        if (day.type === 'start') {
            day.bottomInfo = '入住'
        } else if (day.type === 'end') {
            day.bottomInfo = '离店'
        } else if (day.type === 'start-end') {
            day.bottomInfo = '入住/离店'
        }
        return day;
    };

    const handleClose = () => {
        if (setShowDateSelect) {
            setShowDateSelect(false);
        }
    };

    useEffect(() => {
        if (dates && onDatesSelected) {
            onDatesSelected(dates);
        }
    }, [dates, onDatesSelected]);

    return (
        <>

            <Nav title='选择寄养日期' showLeftArrow={true} clickLeft={handleClose} />
            <Calendar
                poppable={false}
                showTitle={false}
                showSubtitle={false}
                showMark={false}
                allowSameDay={true}
                lazyRender={true}
                type={"range"}
                color="#FCCB30"
                style={{ height: "85vh" }}
                formatter={formatter}
                onConfirm={val => {
                    const selectedDates = val.map(el => {
                        return el.toLocaleDateString();
                    });
                    setDates(selectedDates);
                    handleClose();
                }}
            />
            <div className='calendar-bottom'>
                <div className='calendar-bottom-item'>
                    <div className='calendar-bottom-item-color' style={{ backgroundColor: '#ECECEC' }}></div>
                    <div className='calendar-bottom-item-text'>不可预约时间</div>
                </div>
                <div className='calendar-bottom-item'>
                    <div className='calendar-bottom-item-color' style={{ backgroundColor: '#FCCB30' }}></div>
                    <div className='calendar-bottom-item-text'>已预约时间</div>
                </div>
                <div className='calendar-bottom-item'>
                    <div className='calendar-bottom-item-color' style={{ border: '#D9D9D9 .5px solid' }}></div>
                    <div className='calendar-bottom-item-text'>可预约时间</div>
                </div>
            </div>
        </>
    );
};

export default DateSelect;