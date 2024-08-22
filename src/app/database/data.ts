import React from 'react'
export type Products = {
    id: number,
    productName: string,
    price: number,
    image: string,
    quantity: number,
}

export const products: Products[] = [
  {
    id: 1,
    productName: 'Cam',
    price: 12000,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/280px-Oranges_-_whole-halved-segment.jpg',
    quantity: 12,
  },
  {
    id: 2,
    productName: 'Táo',
    price: 15000,
    image: 'https://gcs.tripi.vn/public-tripi/tripi-feed/img/474092UbP/anh-cuc-dep-cua-qua-tao_095349241.jpg',
    quantity: 20,
  },
  {
    id: 3,
    productName: 'Nho',
    price: 25000,
    image: 'https://file1.dangcongsan.vn/DATA/0/2019/02/australian_table_grapes_001-11_26_07_831.jpg',
    quantity: 8,
  },
  {
    id: 4,
    productName: 'Chuối',
    price: 10000,
    image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/chuoi1-16341869574602070184903.jpg',
    quantity: 30,
  },
]
