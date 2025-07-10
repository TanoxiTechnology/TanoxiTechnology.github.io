interface ProductTranslation {
  name: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
}

export interface Product {
  id: number;
  translations: {
    en: ProductTranslation;
    zh: ProductTranslation;
  };
  price: number;
}

// Mock products data with translations
export const products: Product[] = [
  {
    id: 1,
    translations: {
      en: {
        name: 'Sample Product 1',
        description: 'This is a detailed description of the product. It includes all the important features and specifications that a customer might want to know about.',
        features: [
          'High-quality materials',
          'Durable construction',
          'Modern design',
          'Multiple color options',
        ],
        specifications: {
          'Dimensions': '10 x 5 x 2 inches',
          'Weight': '2 lbs',
          'Material': 'Premium quality',
          'Warranty': '1 year',
        }
      },
      zh: {
        name: '示例产品 1',
        description: '这是产品的详细说明。包含客户可能想要了解的所有重要功能和规格。',
        features: [
          '优质材料',
          '耐用构造',
          '现代设计',
          '多种颜色选择',
        ],
        specifications: {
          '尺寸': '10 x 5 x 2 英寸',
          '重量': '2 磅',
          '材质': '优质材料',
          '保修': '1 年',
        }
      }
    },
    price: 99.99,
  },
  {
    id: 2,
    translations: {
      en: {
        name: 'Sample Product 2',
        description: 'This is a detailed description of product 2. It includes all the important features and specifications that a customer might want to know about.',
        features: [
          'Premium design',
          'Long-lasting battery',
          'Compact size',
          'Water resistant',
        ],
        specifications: {
          'Dimensions': '8 x 4 x 1.5 inches',
          'Weight': '1.5 lbs',
          'Material': 'High-grade aluminum',
          'Warranty': '2 years',
        }
      },
      zh: {
        name: '示例产品 2',
        description: '这是产品2的详细说明。包含客户可能想要了解的所有重要功能和规格。',
        features: [
          '优质设计',
          '持久续航',
          '小巧尺寸',
          '防水设计',
        ],
        specifications: {
          '尺寸': '8 x 4 x 1.5 英寸',
          '重量': '1.5 磅',
          '材质': '高级铝材',
          '保修': '2 年',
        }
      }
    },
    price: 149.99,
  },
  {
    id: 3,
    translations: {
      en: {
        name: 'Sample Product 3',
        description: 'This is a detailed description of product 3. It includes all the important features and specifications that a customer might want to know about.',
        features: [
          'Smart features',
          'Wireless connectivity',
          'HD display',
          'Voice control',
        ],
        specifications: {
          'Dimensions': '12 x 6 x 3 inches',
          'Weight': '3 lbs',
          'Material': 'Premium plastic',
          'Warranty': '18 months',
        }
      },
      zh: {
        name: '示例产品 3',
        description: '这是产品3的详细说明。包含客户可能想要了解的所有重要功能和规格。',
        features: [
          '智能功能',
          '无线连接',
          '高清显示',
          '语音控制',
        ],
        specifications: {
          '尺寸': '12 x 6 x 3 英寸',
          '重量': '3 磅',
          '材质': '优质塑料',
          '保修': '18 个月',
        }
      }
    },
    price: 199.99,
  }
];
