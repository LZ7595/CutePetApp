import '@/scss/nurseInfo.scss'

const nurseInfo = ({ nurseData = [
    {
        "imgUrl": "/src/assets/7.jpg",
        "name": "朱小亮",
        "office": "专家医师/经理",
        "workYear": 3
    },
    {
        "imgUrl": "/src/assets/2.jpg",
        "name": "高小峰",
        "office": "主治医师/院长",
        "workYear": 5
    },
    {
        "imgUrl": "/src/assets/4.jpg",
        "name": "朱小小",
        "office": "高级医师",
        "workYear": 2
    },
    {
        "imgUrl": "/src/assets/8.jpg",
        "name": "王小样",
        "office": "高级医师",
        "workYear": 4
    },

] }) => {
    return nurseData.map(({ imgUrl, name, office, workYear }, index) => (
        <div className="nurseInfo" key={index}>
            <img src={imgUrl} alt={name} />
            <div className="nurseComment">
                <p className='nurseName'>{name}</p>
                <p className='nurseOffice'>{office}</p>
                <p className='nurseWorkYear'>从业{workYear}年</p>
            </div>
        </div>
    ));
}

export default nurseInfo;