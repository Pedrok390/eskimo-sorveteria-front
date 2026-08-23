const productImages = import.meta.glob(
  "../images/products/**/*.png",
  {
    eager: true,
    import: "default",
  }
);

function getImage(path) {
  return productImages[`../images/products/${path}`];
}

export const products = [
  // BARRA
  {
    id: 1,
    name: "Chocotine",
    category: "Barra",
    price: 7,
    promotionalPrice: 0,
    image: getImage("barra/chocotine.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

    nutrition: {
      portion: {
        amount: 58,
        unit: "g",
        description: "1 unidade"
      },

      values: {
        energy: {
          per100g: 91,
          perPortion: 55,
          dailyValue: 3
        },

        carbohydrates: {
          per100g: 23,
          perPortion: 14,
          dailyValue: 5
        },

        totalSugars: {
          per100g: 23,
          perPortion: 14,
          dailyValue: null
        },

        addedSugars: {
          per100g: 23,
          perPortion: 14,
          dailyValue: 28
        },

        proteins: {
          per100g: 0,
          perPortion: 0,
          dailyValue: 0
        },

        totalFat: {
          per100g: 0,
          perPortion: 0,
          dailyValue: 0
        },

        saturatedFat: {
          per100g: 0,
          perPortion: 0,
          dailyValue: 0
        },

        transFat: {
          per100g: 0,
          perPortion: 0,
          dailyValue: 0
        },

        fiber: {
          per100g: 0,
          perPortion: 0,
          dailyValue: 0
        },

        sodium: {
          per100g: 6.8,
          perPortion: 4.1,
          dailyValue: 0
        }
      }
    }
  },
  {
    id: 2,
    name: "Super Barrita",
    category: "Barra",
    price: 7,
    promotionalPrice: 0,
    image: getImage("barra/Super Barrita.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // BEST CUP
  {
    id: 3,
    name: "Best Cup Dubai",
    category: "Best Cup",
    price: 19.5,
    promotionalPrice: 0,
    image: getImage("best-cup/bestcup dubai 3.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 4,
    name: "Best Cup Abacaxi",
    category: "Best Cup",
    price: 19.5,
    promotionalPrice: 0,
    image: getImage("best-cup/bestcup_abacaxi.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 5,
    name: "Best Cup Doce de Leite",
    category: "Best Cup",
    price: 19.5,
    promotionalPrice: 0,
    image: getImage("best-cup/bestcup_doce de leite_02.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 6,
    name: "Best Cup Floresta Negra",
    category: "Best Cup",
    price: 19.5,
    promotionalPrice: 0,
    image: getImage("best-cup/bestcup_floresta negra_02.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 7,
    name: "Best Cup Pistache",
    category: "Best Cup",
    price: 19.5,
    promotionalPrice: 0,
    image: getImage("best-cup/bestcup_pstache_02.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // BOMBOM PALITO
  {
    id: 8,
    name: "Picolé Brigadeiro",
    category: "Bombom Palito",
    price: 5,
    promotionalPrice: 0,
    image: getImage("bom-bom-palito/PICOLE BRIGADEIRO.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 9,
    name: "Picolé Skimo",
    category: "Bombom Palito",
    price: 5,
    promotionalPrice: 0,
    image: getImage("bom-bom-palito/PICOLE SKIMO.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // COBERTURAS
  {
    id: 10,
    name: "Calda Mágica",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/calda-magica.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 11,
    name: "Caramelo 1kg",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/caramelo-1kg.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 12,
    name: "Chocolate 1kg",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/chocolate-1kg.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 13,
    name: "Chocolate 350g",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/chocolate-350g.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 14,
    name: "Manga 1kg",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/manga-1kg.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 15,
    name: "Menta 1kg",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/menta-1kg.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 16,
    name: "Morango 350g",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/morango-350g.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 17,
    name: "Pistache 1kg",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/pistache-1kg.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 18,
    name: "Pistache 350g",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/pistache-350g.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 19,
    name: "Porto Blue 350g",
    category: "Coberturas",
    price: 0,
    promotionalPrice: 0,
    image: getImage("coberturas/porto-blue-350g.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // COPOS
  {
    id: 20,
    name: "Bombom de Coco",
    category: "Copos de Sorvete",
    price: 5,
    promotionalPrice: 0,
    image: getImage("copos/Bombom-de-Coco-semlupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 21,
    name: "Caramelo Salgado & Cookies",
    category: "Copos de Sorvete",
    price: 5,
    promotionalPrice: 0,
    image: getImage("copos/Caramelo-Salgado-&-Cookies-semlupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 22,
    name: "Morango ao Leite",
    category: "Copos de Sorvete",
    price: 5,
    promotionalPrice: 0,
    image: getImage("copos/Morango-ao-Leite-semlupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 23,
    name: "Napolicup",
    category: "Copos de Sorvete",
    price: 7,
    promotionalPrice: 0,
    image: getImage("copos/Napolicup 2023.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 24,
    name: "Sundae Baunilha com Chocotella",
    category: "Copos de Sorvete",
    price: 7,
    promotionalPrice: 0,
    image: getImage("copos/sundae Baunilha com chocotela.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 25,
    name: "Sundae Fruta do Bosco",
    category: "Copos de Sorvete",
    price: 7,
    promotionalPrice: 0,
    image: getImage("copos/Sundae fruta do bosco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 26,
    name: "Torta de Limão",
    category: "Copos de Sorvete",
    price: 5,
    promotionalPrice: 0,
    image: getImage("copos/Torta-de-Limão-semlupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // CREME SPECIALE
  {
    id: 27,
    name: "Frutas Vermelhas",
    category: "Creme Speciale",
    price: 4.5,
    promotionalPrice: 0,
    image: getImage("creme-speciale/Frutas vermelhas.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 28,
    name: "Creme Speciale Chocolate",
    category: "Creme Speciale",
    price: 4.5,
    promotionalPrice: 0,
    image: getImage("creme-speciale/Picolé-Creme Speciale(chocolate).png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // DIAMOND
  {
    id: 29,
    name: "Diamond Chocomalt",
    category: "Diamond",
    price: 7,
    promotionalPrice: 0,
    image: getImage("diamond/Diamond chocomalt.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 30,
    name: "Diamond Cookies Branco",
    category: "Diamond",
    price: 7,
    promotionalPrice: 0,
    image: getImage("diamond/Diamond cookies branco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 31,
    name: "Diamond Cookies",
    category: "Diamond",
    price: 7,
    promotionalPrice: 0,
    image: getImage("diamond/Diamond Cookies.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 32,
    name: "Diamond Frutas Vermelhas",
    category: "Diamond",
    price: 7,
    promotionalPrice: 0,
    image: getImage("diamond/Diamond_frutas_vermelhas.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 33,
    name: "Diamond Pistache",
    category: "Diamond",
    price: 7,
    promotionalPrice: 0,
    image: getImage("diamond/Diamond_pistache.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // ITUZINHO
  {
    id: 34,
    name: "Chicletes",
    category: "Ituzinho",
    price: 4.5,
    promotionalPrice: 0,
    image: getImage("ituzinho/Chicletes.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 35,
    name: "Leitinho Trufado",
    category: "Ituzinho",
    price: 4.5,
    promotionalPrice: 0,
    image: getImage("ituzinho/Leitinho trufado.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 36,
    name: "Itu",
    category: "Ituzinho",
    price: 4.5,
    promotionalPrice: 0,
    image: getImage("ituzinho/Mockup Itu.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // KIDS
  {
    id: 37,
    name: "Picolé Unicórnio",
    category: "Kids",
    price: 5,
    promotionalPrice: 0,
    image: getImage("kids/Ilustração Picolé Unicórnio.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 38,
    name: "Bob Esponja",
    category: "Kids",
    price: 5,
    promotionalPrice: 0,
    image: getImage("kids/Mockup embalagem BOB Oficial.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 39,
    name: "Patrick",
    category: "Kids",
    price: 5,
    promotionalPrice: 0,
    image: getImage("kids/Mockup embalagem PATRICK Oficial.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // LA SOBREMESA
  {
    id: 40,
    name: "Limonada Suíça",
    category: "La Sobremesa",
    price: 5,
    promotionalPrice: 0,
    image: getImage("la-sobremesa/Limonada Suica.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 41,
    name: "Picolé 4 Leites",
    category: "La Sobremesa",
    price: 5,
    promotionalPrice: 0,
    image: getImage("la-sobremesa/Picole 4 leites.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 42,
    name: "Picolé Pudim de Leite",
    category: "La Sobremesa",
    price: 5,
    promotionalPrice: 0,
    image: getImage("la-sobremesa/Picole Pudim de leite.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // LINHA MAIS
  {
    id: 43,
    name: "Coco Queimado",
    category: "Linha Mais",
    price: 5,
    promotionalPrice: 0,
    image: getImage("linha-mais/Coco queimado RGB.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 44,
    name: "Mais Coco",
    category: "Linha Mais",
    price: 5,
    promotionalPrice: 0,
    image: getImage("linha-mais/mais-coco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // LOS PALITOS MEXICANOS
  {
    id: 45,
    name: "Maracujá com Leite Condensado",
    category: "Los Palitos Mexicanos",
    price: 8,
    promotionalPrice: 0,
    image: getImage("los-palitos-mexicanos/Maracujá com leite condensado.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 46,
    name: "Morango com Leite Condensado",
    category: "Los Palitos Mexicanos",
    price: 8,
    promotionalPrice: 0,
    image: getImage("los-palitos-mexicanos/Morango com leite condensado.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // MORENINHA
  {
    id: 47,
    name: "Moreninha",
    category: "Moreninha",
    price: 6,
    promotionalPrice: 0,
    image: getImage("moreninha/Cópia de Mockup Moreninha.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // PICOLAPIS
  {
    id: 48,
    name: "Picolé Surpresa",
    category: "Picolapis",
    price: 2.5,
    promotionalPrice: 0,
    image: getImage("picolapis/Picolé-surpresa-SEM-LUPA.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // PICOLÉ CREMOSO
  {
    id: 49,
    name: "Chocolate",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/chocolate.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 50,
    name: "Coco",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/coco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 51,
    name: "Creme",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/creme.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 52,
    name: "Doce de Leite",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/doce-de-leite.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 53,
    name: "Leite Condensado",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/leite-condensado.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 54,
    name: "Milho Verde",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/milho-verde.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 55,
    name: "Morango",
    category: "Picolé Cremoso",
    price: 3.5,
    promotionalPrice: 0,
    image: getImage("picole-cremoso/morango.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // PICOLÉ FRUTA
  {
    id: 56,
    name: "Abacaxi",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Abacaxi.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 57,
    name: "Brasileirinho",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Brasileirinho.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 58,
    name: "Framboesa",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Framboesa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 59,
    name: "Limão",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Limão.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 60,
    name: "Maracujá",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Maracujá.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 61,
    name: "Minisaia",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Minisaia.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 62,
    name: "Morango",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Morango.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 63,
    name: "Uva",
    category: "Picolé Fruta",
    price: 2.5,
    promotionalPrice: 1.5,
    image: getImage("picole-fruta/Uva.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // PICOLÉ ZERO
  {
    id: 64,
    name: "Chocolate",
    category: "Picolé Zero",
    price: 5,
    promotionalPrice: 0,
    image: getImage("picole-zero/chocolate.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 65,
    name: "Coco",
    category: "Picolé Zero",
    price: 5,
    promotionalPrice: 0,
    image: getImage("picole-zero/coco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // POTE 1L ZERO
  {
    id: 66,
    name: "Beijinho",
    category: "Pote 1L Zero",
    price: 23.5,
    promotionalPrice: 0,
    image: getImage("pote-1l-zero/Beijinho.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 67,
    name: "Frutas Vermelhas",
    category: "Pote 1L Zero",
    price: 23.5,
    promotionalPrice: 0,
    image: getImage("pote-1l-zero/Frutas vermelhas.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 68,
    name: "Napolitano Zero Açúcar",
    category: "Pote 1L Zero",
    price: 23.5,
    promotionalPrice: 0,
    image: getImage("pote-1l-zero/zero Açúcar Napolitano.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // POTES 2L
  {
    id: 69,
    name: "Abacaxi com Coco",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Abacaxi com coco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 70,
    name: "Banana com Chocotella",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Banana com Chocotella.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 71,
    name: "Brigadeiro",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Brigadeiro.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 72,
    name: "Chocolak",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Chocolak.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 73,
    name: "Chocolate Branco",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Chocolate Branco.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 74,
    name: "Chocomenta",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Chocomenta.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 75,
    name: "Coco Milho Verde",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Coco Milho Verde.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 76,
    name: "Creme",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Creme.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 77,
    name: "Creme + Flocos + Chocolate",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Creme+flocos+chocolate.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 78,
    name: "Flocos",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Flocos.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 79,
    name: "Flocos + Morango",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Flocos+morango.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 80,
    name: "Leite Condensado Chocolate Xadrez",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Leite Condensado Chocolate Xadrez.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 81,
    name: "Leitinho Trufado",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Leitinho Trufado.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 82,
    name: "Marta Rocha",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Marta Rocha.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 83,
    name: "Morango",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Morango.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 84,
    name: "Napolitano",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Napolitano.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 85,
    name: "Nata + Uva",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Nata+Uva.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 86,
    name: "Passas ao Rum",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Passas ao Rum.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 87,
    name: "Cereja",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Pote Sorvete Cereja sem fundo.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 88,
    name: "Crocante",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Pote Sorvete Crocante.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 89,
    name: "Maracujá Trufado",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Pote Sorvete Maracujá Trufado sem lupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 90,
    name: "Sensazione",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Pote Sorvete Sensazione sem lupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 91,
    name: "Tramontaro",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Tramontaro.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 92,
    name: "Trufa",
    category: "Potes 2L",
    price: 28.5,
    promotionalPrice: 0,
    image: getImage("potes-2l/Trufa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // POTES NEVADO
  {
    id: 93,
    name: "Banoffee",
    category: "Potes Nevado",
    price: 23.5,
    promotionalPrice: 0,
    image: getImage("potes-nevado/Banoffee Sem lupa.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 94,
    name: "Iogurte Grego com Amora",
    category: "Potes Nevado",
    price: 23.5,
    promotionalPrice: 0,
    image: getImage("potes-nevado/Iogurte Grego com Amora.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 95,
    name: "Nata Trufada",
    category: "Potes Nevado",
    price: 23.5,
    promotionalPrice: 0,
    image: getImage("potes-nevado/Nata Trufada.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // SELETTO
  {
    id: 96,
    name: "Brigadeiro",
    category: "Seletto",
    price: 8.5,
    promotionalPrice: 0,
    image: getImage("seletto/Brigadeiro.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 97,
    name: "Crocante",
    category: "Seletto",
    price: 8.5,
    promotionalPrice: 0,
    image: getImage("seletto/Crocante.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 98,
    name: "Pistache",
    category: "Seletto",
    price: 8.5,
    promotionalPrice: 0,
    image: getImage("seletto/Seletto pistache mockup.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },

  // TURMA DA MÔNICA
  {
    id: 99,
    name: "Cebolinha",
    category: "Turma da Mônica",
    price: 2.5,
    promotionalPrice: 0,
    image: getImage("turma-da-monica/picole-cebolinha.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 100,
    name: "Magali",
    category: "Turma da Mônica",
    price: 2.5,
    promotionalPrice: 0,
    image: getImage("turma-da-monica/picole-magali.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
  {
    id: 101,
    name: "Mônica",
    category: "Turma da Mônica",
    price: 2.5,
    promotionalPrice: 0,
    image: getImage("turma-da-monica/picole-monica.png"),
    description: "Picolé sabor artificial de framboesa. Colorido artificialmente. Aromatizado artificialmente.",

  nutrition: {
    portion: {
      amount: 58,
      unit: "g",
      description: "1 unidade"
    },

    values: {
      energy: {
        per100g: 91,
        perPortion: 55,
        dailyValue: 3
      },

      carbohydrates: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 5
      },

      totalSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: null
      },

      addedSugars: {
        per100g: 23,
        perPortion: 14,
        dailyValue: 28
      },

      proteins: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      totalFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      saturatedFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      transFat: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      fiber: {
        per100g: 0,
        perPortion: 0,
        dailyValue: 0
      },

      sodium: {
        per100g: 6.8,
        perPortion: 4.1,
        dailyValue: 0
      }
    }
  }
  },
];
