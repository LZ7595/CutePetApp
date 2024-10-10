import Nav from "@/components/navbar";
import { useState, useEffect, useMemo } from 'react';
import { Form, Uploader, Button, Popup, Input, Picker, DatetimePicker } from 'react-vant';
import '@/scss/addAnimal.scss';
import AnimalTypeSelect from '@/components/animalTypeSelect';

const addAnimal = () => {
  const dogVaccinationOptions = [
    {
      text: "未接种任何疫苗",
      value: "none"
    },
    {
      text: "仅接种1针多联疫苗",
      value: "1_core_dog"
    },
    {
      text: "仅接种2针多联疫苗",
      value: "2_core_dog"
    },
    {
      text: "仅接种3针多联疫苗且未接种狂犬病疫苗",
      value: "3_core_no_rabies_dog"
    },
    {
      text: "接种3针多联疫苗,1针狂犬病疫苗",
      value: "3_core_plus_rabies_puppy_dog"
    },
    {
      text: "接种3针多联疫苗,1针狂犬病疫苗",
      value: "3_core_plus_rabies_adult_dog"
    },
    {
      text: "接种3针多联疫苗,1针狂犬病疫苗,1针犬腺病毒疫苗",
      value: "3_core_plus_rabies_plus_adenovirus_adult_dog"
    },
    {
      text: "接种3针多联疫苗,1针狂犬病疫苗,1针犬副流感病毒疫苗",
      value: "3_core_plus_rabies_plus_parainfluenza_adult_dog"
    },
    {
      text: "接种3针多联疫苗,1针狂犬病疫苗,1针钩端螺旋体疫苗",
      value: "3_core_plus_rabies_plus_leptospirosis_adult_dog"
    }
  ];
  const catVaccinationOptions = [
    {
      text: "未接种任何疫苗",
      value: "none"
    },
    {
      text: "仅接种1针猫三联疫苗",
      value: "1_core_cat"
    },
    {
      text: "仅接种2针猫三联疫苗",
      value: "2_core_cat"
    },
    {
      text: "仅接种3针猫三联疫苗且未接种狂犬病疫苗",
      value: "3_core_no_rabies_cat"
    },
    {
      text: "接种3针猫三联疫苗,1针狂犬病疫苗",
      value: "3_core_plus_rabies_kitten_cat"
    },
    {
      text: "接种3针猫三联疫苗,1针狂犬病疫苗",
      value: "3_core_plus_rabies_adult_cat"
    },
    {
      text: "接种3针猫三联疫苗,1针狂犬病疫苗,1针猫白血病病毒疫苗",
      value: "3_core_plus_rabies_plus_leukemia_adult_cat"
    },
    {
      text: "接种3针猫三联疫苗,1针狂犬病疫苗,1针猫传染性腹膜炎疫苗",
      value: "3_core_plus_rabies_plus_fip_adult_cat"
    }
  ];
  const [form] = Form.useForm()
  const [animalType, setAnimalType] = useState('');
  const [showAnimalTypeSelect, setShowAnimalTypeSelect] = useState(false);
  const today = new Date();
  const minDate = new Date(2000, 0, 1);
  const [maxDate, setMaxDate] = useState(today);
  const vaccinationColumns = useMemo(() => {
    return animalType && animalType.type === 'dog' ? dogVaccinationOptions : animalType && animalType.type === 'cat' ? catVaccinationOptions : [];
  }, [animalType]);
  const handleSave = () => {
    form.submit()
  };
  const onFinish = (values) => {
    const processedValues = { ...values };
    for (const key in processedValues) {
      if (processedValues[key] === undefined) {
        processedValues[key] = "";
      }
    }
    console.log('处理后的表单数据:', processedValues);
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
            <Uploader maxCount={1} previewSize="13.33vw" uploadIcon={<img src="/src/assets/宠物.jpg" />} />
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
            <DatetimePicker
              popup
              type='date'
              minDate={minDate}
              maxDate={maxDate}
            >
              {(val) => (val ? val.toLocaleDateString() : '请选择出生日期')}
            </DatetimePicker>
          </Form.Item>
          <Form.Item
            isLink
            name='animalGender'
            label='性别'
            trigger='onConfirm'
            rules={[{ required: true }]}
            onClick={(_, action) => {
              action.current?.open()
            }}
          >
            <Picker
              popup
              columns={['公', '母']}
            >
              {val => val || '请选择性别'}
            </Picker>
          </Form.Item>
          <Form.Item
            isLink
            name='animalType'
            label='宠物类型'
            trigger='onConfirm'
            rules={[{ required: true }]}
            onClick={() => setShowAnimalTypeSelect(true)}
          >
            {animalType ? animalType.breed : '请选择宠物类型'}
            <Popup
              visible={showAnimalTypeSelect}
              destroyOnClose={true}
              position='bottom'
              description={<AnimalTypeSelect form={form} onSelect={handleAnimalTypeSelect} setShowAnimalTypeSelect={setShowAnimalTypeSelect} />}
              style={{ width: '100%', height: '100%' }}
            />
          </Form.Item>
          <Form.Item
            isLink
            name='vaccination'
            label='疫苗情况'
            trigger='onConfirm'
            rules={[{ required: true }]}
            onClick={(_, action) => {
              action.current?.open();
            }}
          >
            <Picker
              popup
              columns={vaccinationColumns}
            >
              {val => val || '请选择'}
            </Picker>
          </Form.Item>
          <Form.Item
            isLink
            name='sterilization'
            label='绝育情况'
            trigger='onConfirm'
            rules={[{ required: true }]}
            onClick={(_, action) => {
              action.current?.open()
            }}
          >
            <Picker
              popup
              columns={['未绝育', '已绝育', '未知']}
            >
              {val => val || '请选择'}
            </Picker>
          </Form.Item>
          <Form.Item
            isLink
            name='deworming'
            label='驱虫情况'
            trigger='onConfirm'
            rules={[{ required: true }]}
            onClick={(_, action) => {
              action.current?.open()
            }}
          >
            <Picker
              popup
              columns={['未驱虫', '已驱虫', '未知']}
            >
              {val => val || '请选择'}
            </Picker>
          </Form.Item>
          <Form.Item name='animalDescribe' label='性格爱好'>
            <Input.TextArea rows={3} maxLength={80} showWordLimit />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default addAnimal;