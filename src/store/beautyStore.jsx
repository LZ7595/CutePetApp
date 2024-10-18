import { create } from "zustand";

export const useBeautyStore = create((set, get) => ({
  selectedProduct: null,
  selectedAnimal: null,
  selectedAddress: "北京市海淀区中关村大街 1 号",
  selectedStore: {
      storeId: null,
      storeName: null
  },
  selectedIProducts: [],
  selectedNurse: {},
  remark: '',
  selectedDatetime: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setSelectedAnimal: (animal) => set({ selectedAnimal: animal }),
  setSelectedAddress: (address) => set({ selectedAddress: address }),
  setSelectedStore: (store) => set({ selectedStore: store }),
  setSelectedNurse: (nurse) => set({ selectedNurse: nurse }),
  addSelectedIProduct: (iproduct) => {
      const currentSelectedIProducts = get().selectedIProducts;
      const isProductExists = currentSelectedIProducts.some(
          (item) => item.iproduct_id === iproduct.iproduct_id
      );
      if (!isProductExists) {
          set({ selectedIProducts: [...currentSelectedIProducts, iproduct] });
      } else {
          set({
              selectedIProducts: currentSelectedIProducts.filter(
                  (item) => item.iproduct_id!== iproduct.iproduct_id
              )
          });
      }
  },
  removeSelectedIProduct: (iproduct) => {
      const currentSelectedIProducts = get().selectedIProducts.filter(
          (item) => item.iproduct_id!== iproduct.iproduct_id
      );
      set({ selectedIProducts: currentSelectedIProducts });
  },
  setRemarkInStore: (remark) => set({ remark }),
  setSelectedDatetimeInStore: (datetime) => set({ selectedDatetime: datetime }),
  resetState: () =>
      set({
          selectedAnimal: null,
          selectedAddress: "北京市海淀区中关村大街 1 号",
          selectedStore: {
              storeId: null,
              storeName: null
          },
          selectedIProducts: [],
          selectedNurse: {},
          remark: '',
          selectedDatetime: null
      })
}));