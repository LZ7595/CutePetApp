import { Cell, Popup, Space, Divider } from "react-vant";
import { useState } from "react";
import DateSelect from "@/components/dateSelect";
import "./index.scss";

const DateSelection = ({ onDaysChange , isLink=true , title='请选择寄养时间' , reservationDates = null, odays = null }) => {
    const [showDateSelect, setShowDateSelect] = useState(false);
    const [selectedDates, setSelectedDates] = useState( reservationDates || '');
    const [days, setDays] = useState(odays);

    const handleDatesSelected = (dates) => {
        setSelectedDates(dates);
        const start = new Date(dates[0]);
        const end = new Date(dates[1]);
        const oneDay = 24 * 60 * 60 * 1000;
        setDays(Math.round((end - start) / oneDay) + 1);
        if (onDaysChange) {
            onDaysChange(days , selectedDates);
        }
    };

    return (
        <>
            <div className="date-select">
                <Cell
                    isLink= {isLink}
                    title={title}
                    titleStyle={{ flex: 'none' }}
                    value={
                        days ? <div style={{ color: '#FCCB30' }}>共{days}天</div> : ''
                    }
                    onClick={() => setShowDateSelect(true)}
                />
                <div className="date-select-view">
                    {selectedDates.length == 2 ? (
                        <Space divider={<Divider type="vertical" />} gap={"5.87vw"}>
                            <div className="date-select-view-item">
                                <div className="date-select-view-item-date">{selectedDates[0]}</div>
                                <div className="date-select-view-item-time">9:00后入住</div>
                            </div>
                            <div className="date-select-view-item">
                                <div className="date-select-view-item-date">{selectedDates[1]}</div>
                                <div className="date-select-view-item-time">18:00前结束</div>
                            </div>
                        </Space>

                    ) : <div className="selectNull">请选择寄养时间</div>}
                </div>
            </div>
            {isLink ? 
            <Popup
                visible={showDateSelect}
                style={{ width: '100%', height: '100%' }}
                description={<DateSelect setShowDateSelect={setShowDateSelect} onDatesSelected={handleDatesSelected} />}
                position='right'
            /> : ''}
        </>
    );
};

export default DateSelection;