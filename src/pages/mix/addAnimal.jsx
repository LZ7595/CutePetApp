import Nav from "@/components/navbar";
import { useState, useEffect, useRef } from 'react';
import { Form, Uploader, Button, Popup, Input, Picker, DatetimePicker } from 'react-vant';
import '@/scss/addAnimal.scss';
import AnimalTypeSelect from '@/components/animalTypeSelect';

const addAnimal = () => {
  const [form] = Form.useForm()
  const [animalType, setAnimalType] = useState('');
  const [showAnimalTypeSelect, setShowAnimalTypeSelect] = useState(false);
  const handleSave = () => {
    form.submit()
  };
  const onFinish = (values) => {
    console.log('表单数据:', values);
  };
  const handleAnimalTypeSelect = (type) => {
    setAnimalType(type);
  };


  return (
    <div className="addAnimal">
      <Nav title={'添加宠物'} showLeftArrow={true} clickLeft clickRight={handleSave} rightText={"保存"} />
      <div className="addAnimal__content">
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            rules={[{ required: true }]}
            label='头像'
            name='animalImg'
          >
            <Uploader maxCount={1} previewSize="13.33vw" />
          </Form.Item>
          <Form.Item
            label='昵称'
            name='animalName'
            rules={[{ required: true }]}
          >
            <Input placeholder='请输入昵称' align="right" />
          </Form.Item>
          <Form.Item
            isLink
            name='animalAge'
            label='年龄'
            trigger='onConfirm'
            onClick={(_, action) => {
              action.current?.open()
            }}
            rules={[{ required: true }]}
          >
            <DatetimePicker popup type='date'>
              {(val) => (val ? val.toLocaleDateString() : '请选择出生日期')}
            </DatetimePicker>
          </Form.Item>
          <Form.Item
            isLink
            name='animalGender'
            label='性别'
            trigger='onConfirm'
            onClick={(_, action) => {
              action.current?.open()
            }}
          >
            <Picker
              popup
              columns={['公', '母']}
            >
              {val => val || '请输入性别'}
            </Picker>
          </Form.Item>
          <Form.Item
            isLink
            name='animalType'
            label='宠物类型'
            trigger='onConfirm'
            onClick={() => setShowAnimalTypeSelect(true)}
          >
            {animalType ? animalType : '请选择宠物类型'}
            <Popup
              visible={showAnimalTypeSelect}
              destroyOnClose={true}
              position='bottom'
              description={<AnimalTypeSelect form={form} onSelect={handleAnimalTypeSelect} setShowAnimalTypeSelect={setShowAnimalTypeSelect} />}
              style={{ width: '100%', height: '100%' }}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default addAnimal;