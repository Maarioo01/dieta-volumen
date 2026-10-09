// Datos de la dieta. Generado desde el Excel con scripts/excel_a_datos.py
// (se puede editar a mano: cantidades, kcal y macros por ingrediente).
window.DIETA = {
  "fuente": "DIETA-VOLUMEN.xlsx",
  "actualizado": "2026-10-09",
  "personas": [
    {"id": "mario", "nombre": "Mario"},
    {"id": "alba", "nombre": "Alba"}
  ],
  "objetivos": {
    "mario": {
      "desayuno": {
        "etiqueta": "Desayuno / Pre-gym",
        "p": {"min": 25, "max": 30, "texto": "25–30"},
        "hc": {"min": 60, "max": 70, "texto": "60–70"},
        "g": {"min": 10, "max": 15, "texto": "10–15"},
        "kcalPct": {"min": 20, "max": 25, "texto": "20–25"}
      },
      "almuerzo": {
        "etiqueta": "Post-gym / Media mañana",
        "p": {"min": 25, "max": 30, "texto": "25–30"},
        "hc": {"min": 70, "max": 90, "texto": "70–90"},
        "g": {"max": 10, "texto": "≤10"},
        "kcalPct": {"min": 15, "max": 20, "texto": "15–20"}
      },
      "comida": {
        "etiqueta": "Comida",
        "p": {"min": 35, "max": 40, "texto": "35–40"},
        "hc": {"min": 120, "max": 140, "texto": "120–140"},
        "g": {"min": 23, "max": 28, "texto": "23–28"},
        "kcalPct": {"min": 30, "max": 35, "texto": "30–35"}
      },
      "merienda": {
        "etiqueta": "Merienda (opcional)",
        "p": {"min": 15, "max": 20, "texto": "15–20"},
        "hc": {"min": 45, "max": 65, "texto": "45–65"},
        "g": {"min": 10, "max": 15, "texto": "10–15"},
        "kcalPct": {"min": 10, "max": 15, "texto": "10–15"}
      },
      "cena": {
        "etiqueta": "Cena",
        "p": {"min": 30, "max": 35, "texto": "30–35"},
        "hc": {"min": 90, "max": 110, "texto": "90–110"},
        "g": {"min": 19, "max": 24, "texto": "19–24"},
        "kcalPct": {"min": 15, "max": 20, "texto": "15–20"}
      },
      "total": {
        "etiqueta": "TOTAL DIARIO",
        "p": {"aprox": 130, "texto": "≈130"},
        "hc": {"aprox": 435, "texto": "≈435"},
        "g": {"aprox": 77, "texto": "≈77"},
        "kcalPct": {"aprox": 100, "texto": "100"}
      }
    },
    "alba": {
      "desayuno": {
        "etiqueta": "Desayuno / Pre-gym",
        "p": {"min": 20, "max": 25, "texto": "20–25"},
        "hc": {"min": 60, "max": 70, "texto": "60–70"},
        "g": {"min": 10, "max": 15, "texto": "10–15"},
        "kcalPct": {"min": 20, "max": 25, "texto": "20–25"}
      },
      "almuerzo": {
        "etiqueta": "Post-gym / Media mañana",
        "p": {"min": 20, "max": 25, "texto": "20–25"},
        "hc": {"min": 60, "max": 80, "texto": "60–80"},
        "g": {"max": 10, "texto": "≤10"},
        "kcalPct": {"min": 15, "max": 20, "texto": "15–20"}
      },
      "comida": {
        "etiqueta": "Comida",
        "p": {"min": 30, "max": 35, "texto": "30–35"},
        "hc": {"min": 100, "max": 120, "texto": "100–120"},
        "g": {"min": 23, "max": 28, "texto": "23–28"},
        "kcalPct": {"min": 30, "max": 35, "texto": "30–35"}
      },
      "merienda": {
        "etiqueta": "Merienda (opcional)",
        "p": {"min": 15, "max": 20, "texto": "15–20"},
        "hc": {"min": 40, "max": 55, "texto": "40–55"},
        "g": {"min": 10, "max": 15, "texto": "10–15"},
        "kcalPct": {"min": 10, "max": 15, "texto": "10–15"}
      },
      "cena": {
        "etiqueta": "Cena",
        "p": {"min": 25, "max": 30, "texto": "25–30"},
        "hc": {"min": 75, "max": 90, "texto": "75–90"},
        "g": {"min": 19, "max": 24, "texto": "19–24"},
        "kcalPct": {"min": 15, "max": 20, "texto": "15–20"}
      },
      "total": {
        "etiqueta": "TOTAL DIARIO",
        "p": {"aprox": 110, "texto": "≈110"},
        "hc": {"aprox": 385, "texto": "≈385"},
        "g": {"aprox": 72, "texto": "≈72"},
        "kcalPct": {"aprox": 100, "texto": "100"}
      }
    }
  },
  "recetas": {
    "desayuno": [
      {
        "id": "tortilla-con-tostadas-y-jamon",
        "nombre": "Tortilla con tostadas y jamón",
        "opcion": "Opción 1",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Huevos", "cantidad": "1 huevo (50 g)*"},
              {"alimento": "Claras", "cantidad": "2,5 claras (83,5 g)*"},
              {"alimento": "Pavo (lonchas)", "cantidad": "2 lonchas (20 g)*"},
              {"alimento": "Queso Edam", "cantidad": "½ loncha (10 g)*"},
              {"alimento": "Pan integral", "cantidad": "1 tostada (28 g)"},
              {"alimento": "Tortitas de maíz", "cantidad": "~6 tortitas (60 g)"}
            ],
            "total": {"kcal": 436.9, "p": 28.4, "hc": 60.3, "g": 10}
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Huevos", "cantidad": "1 huevo (50 g)*"},
              {"alimento": "Claras", "cantidad": "2,5 claras (83,5 g)*"},
              {"alimento": "Pavo (lonchas)", "cantidad": "2 lonchas (20 g)*"},
              {"alimento": "Queso Edam", "cantidad": "½ loncha (10 g)*"},
              {"alimento": "Pan integral", "cantidad": "2 tostadas (56 g)"},
              {"alimento": "Muesli crunchy", "cantidad": "60 g"},
              {"alimento": "Leche", "cantidad": "200 ml"}
            ],
            "total": {"kcal": 615.9, "p": 38.4, "hc": 64.3, "g": 20.3}
          }
        }
      }
    ],
    "almuerzo": [
      {
        "id": "proteina-con-fruta",
        "nombre": "Proteína con fruta",
        "opcion": "Opción 1",
        "personas": {
          "mario": {
            "nombre": "Proteína con plátano",
            "ingredientes": [
              {"alimento": "Batido proteína", "cantidad": "25 g"},
              {"alimento": "Creatina", "cantidad": "10 g"},
              {"alimento": "Leche", "cantidad": "200 ml"},
              {"alimento": "Muesli crunchy", "cantidad": "60 g"},
              {"alimento": "Plátano", "cantidad": "120 g"}
            ],
            "total": {"kcal": 570.7, "p": 35.1, "hc": 72.2, "g": 12}
          },
          "alba": {
            "nombre": "Proteína con mandarina",
            "ingredientes": [
              {"alimento": "Batido proteína", "cantidad": "25 g"},
              {"alimento": "Creatina", "cantidad": "5 g"},
              {"alimento": "Tortitas", "cantidad": "60 g"},
              {"alimento": "Mandarina", "cantidad": "100 g"}
            ],
            "total": {"kcal": 362.6, "p": 26.6, "hc": 62.2, "g": 1.4}
          }
        }
      }
    ],
    "comida": [
      {
        "id": "macarrones",
        "nombre": "Macarrones",
        "color": "#FCE5CD",
        "personas": {
          "mario": {
            "nota": "Opción 2 · Macarrones con cebolla, calabacín + plátano",
            "ingredientes": [
              {"alimento": "Macarrones (secos)", "cantidad": "160 g", "kcal": 566, "p": 20.8, "hc": 113.6, "g": 2.4},
              {"alimento": "Pechuga de pollo", "cantidad": "60 g", "kcal": 66, "p": 13.2, "hc": 0, "g": 1.2},
              {"alimento": "Calabacín + cebolla", "cantidad": "250 g", "kcal": 70, "p": 3, "hc": 10, "g": 0.5},
              {"alimento": "Aceite de oliva", "cantidad": "20 g", "kcal": 180, "p": 0, "hc": 0, "g": 20}
            ]
          },
          "alba": {
            "nota": "Opción 2 · Macarrones con cebolla, calabacín + plátano",
            "ingredientes": [
              {"alimento": "Macarrones (secos)", "cantidad": "135 g", "kcal": 477.6, "p": 17.6, "hc": 95.9, "g": 2},
              {"alimento": "Pechuga de pollo", "cantidad": "56 g", "kcal": 61.6, "p": 12.3, "hc": 0, "g": 1.2},
              {"alimento": "Verduras salteadas", "cantidad": "220 g", "kcal": 60, "p": 2.5, "hc": 9, "g": 0.4},
              {"alimento": "Aceite de oliva", "cantidad": "17 g", "kcal": 153, "p": 0, "hc": 0, "g": 17}
            ]
          }
        }
      },
      {
        "id": "ensalada-de-garbanzos",
        "nombre": "Ensalada de garbanzos",
        "color": "#D7E7F5",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Atún (escurrido)", "cantidad": "45 g", "kcal": 110.2, "p": 9.4, "hc": 0.4, "g": 8.1},
              {"alimento": "Garbanzos cocidos", "cantidad": "175 g", "kcal": 157.5, "p": 9.6, "hc": 16.6, "g": 3.9},
              {"alimento": "Queso fresco de vaca", "cantidad": "40 g", "kcal": 67.2, "p": 4.7, "hc": 1.8, "g": 4.6},
              {"alimento": "Tomate natural", "cantidad": "150 g", "kcal": 27, "p": 1.4, "hc": 5.8, "g": 0.3},
              {"alimento": "Arroz basmati (seco)", "cantidad": "135 g", "kcal": 479.2, "p": 12.2, "hc": 105.3, "g": 0.8},
              {"alimento": "Aceite oliva (crudo)", "cantidad": "8 g", "kcal": 72, "p": 0, "hc": 0, "g": 8}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Atún (escurrido)", "cantidad": "30 g", "kcal": 73.5, "p": 6.3, "hc": 0.3, "g": 5.4},
              {"alimento": "Garbanzos cocidos", "cantidad": "125 g", "kcal": 112.5, "p": 6.9, "hc": 11.9, "g": 2.8},
              {"alimento": "Queso fresco de vaca", "cantidad": "65 g", "kcal": 109.2, "p": 7.7, "hc": 2.9, "g": 7.4},
              {"alimento": "Tomate natural", "cantidad": "150 g", "kcal": 27, "p": 1.4, "hc": 5.8, "g": 0.3},
              {"alimento": "Arroz basmati (seco)", "cantidad": "115 g", "kcal": 408.2, "p": 10.3, "hc": 89.7, "g": 0.7},
              {"alimento": "Aceite oliva (crudo)", "cantidad": "9 g", "kcal": 81, "p": 0, "hc": 0, "g": 9}
            ]
          }
        }
      },
      {
        "id": "lomo-con-calabacin",
        "nombre": "Lomo con calabacín",
        "color": "#A2C4C9",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Lomo de cerdo", "cantidad": "70 g", "kcal": 106.4, "p": 12.6, "hc": 0, "g": 6.2},
              {"alimento": "Atún escurrido", "cantidad": "35 g", "kcal": 85.8, "p": 7.3, "hc": 0.3, "g": 6.3},
              {"alimento": "Calabacín", "cantidad": "300 g", "kcal": 45, "p": 3.6, "hc": 9, "g": 0.9},
              {"alimento": "Arroz basmati", "cantidad": "155 g", "kcal": 550.2, "p": 13.9, "hc": 120.9, "g": 0.9},
              {"alimento": "Aceite de oliva", "cantidad": "11 g", "kcal": 99, "p": 0, "hc": 0, "g": 11}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Lomo de cerdo", "cantidad": "65 g", "kcal": 98.8, "p": 11.7, "hc": 0, "g": 5.8},
              {"alimento": "Atún escurrido", "cantidad": "30 g", "kcal": 73.5, "p": 6.3, "hc": 0.3, "g": 5.4},
              {"alimento": "Calabacín", "cantidad": "250 g", "kcal": 37.5, "p": 3, "hc": 7.5, "g": 0.8},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "130 g", "kcal": 461.5, "p": 11.7, "hc": 101.4, "g": 0.8},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "13 g", "kcal": 117, "p": 0, "hc": 0, "g": 13, "nota": "nuevo"}
            ]
          }
        }
      },
      {
        "id": "arroz-y-lentejas",
        "nombre": "Arroz y lentejas",
        "color": "#C9DAF8",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Arroz basmati (crudo)", "cantidad": "105 g", "kcal": 372.8, "p": 9.4, "hc": 81.9, "g": 0.6},
              {"alimento": "Lentejas cocidas", "cantidad": "190 g", "kcal": 153.9, "p": 10.8, "hc": 21.3, "g": 0.8},
              {"alimento": "Queso fresco de vaca", "cantidad": "120 g", "kcal": 201.6, "p": 14.2, "hc": 5.4, "g": 13.7},
              {"alimento": "Tomates cherry", "cantidad": "200 g", "kcal": 36, "p": 1.8, "hc": 7.8, "g": 0.4},
              {"alimento": "Zanahoria", "cantidad": "150 g", "kcal": 60, "p": 1.2, "hc": 13.9, "g": 0.3},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "10 g", "kcal": 90, "p": 0, "hc": 0, "g": 10}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Arroz basmati (crudo)", "cantidad": "85 g", "kcal": 301.8, "p": 7.7, "hc": 66.3, "g": 0.5},
              {"alimento": "Lentejas cocidas", "cantidad": "180 g", "kcal": 145.8, "p": 10.3, "hc": 20.2, "g": 0.7},
              {"alimento": "Queso fresco de vaca", "cantidad": "100 g", "kcal": 168, "p": 11.8, "hc": 4.5, "g": 11.4},
              {"alimento": "Tomates cherry", "cantidad": "200 g", "kcal": 36, "p": 1.8, "hc": 7.8, "g": 0.4},
              {"alimento": "Zanahoria", "cantidad": "120 g", "kcal": 48, "p": 1, "hc": 11.2, "g": 0.2},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "12 g", "kcal": 108, "p": 0, "hc": 0, "g": 12}
            ]
          }
        }
      },
      {
        "id": "salmon",
        "nombre": "Salmón",
        "color": "#F4CCCC",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Arroz basmati (crudo)", "cantidad": "100 g", "kcal": 355, "p": 9, "hc": 78, "g": 0.6},
              {"alimento": "Salmón (lomos)", "cantidad": "110 g", "kcal": 245.3, "p": 22, "hc": 0, "g": 17.6},
              {"alimento": "Patata cocida/al vapor", "cantidad": "200 g", "kcal": 140, "p": 3.4, "hc": 31.4, "g": 0.2},
              {"alimento": "Zanahoria", "cantidad": "70 g", "kcal": 28, "p": 0.6, "hc": 6.5, "g": 0.1},
              {"alimento": "Pimiento rojo", "cantidad": "65 g", "kcal": 19.5, "p": 0.7, "hc": 3.9, "g": 0.2},
              {"alimento": "Cebolla", "cantidad": "65 g", "kcal": 26, "p": 0.7, "hc": 6, "g": 0.1},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "5 g", "kcal": 45, "p": 0, "hc": 0, "g": 5}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Arroz basmati (crudo)", "cantidad": "75 g", "kcal": 266.2, "p": 6.8, "hc": 58.5, "g": 0.5},
              {"alimento": "Salmón (lomos)", "cantidad": "95 g", "kcal": 211.8, "p": 19, "hc": 0, "g": 15.2},
              {"alimento": "Patata cocida/al vapor", "cantidad": "200 g", "kcal": 140, "p": 3.4, "hc": 31.4, "g": 0.2},
              {"alimento": "Zanahoria", "cantidad": "70 g", "kcal": 28, "p": 0.6, "hc": 6.5, "g": 0.1},
              {"alimento": "Pimiento rojo", "cantidad": "65 g", "kcal": 19.5, "p": 0.7, "hc": 3.9, "g": 0.2},
              {"alimento": "Cebolla", "cantidad": "65 g", "kcal": 26, "p": 0.7, "hc": 6, "g": 0.1},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "8 g", "kcal": 72, "p": 0, "hc": 0, "g": 8}
            ]
          }
        }
      },
      {
        "id": "espaguetis-con-pavo",
        "nombre": "Espaguetis con pavo",
        "color": "#EAD1DC",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Pechuga de pavo", "cantidad": "80 g", "kcal": 90.4, "p": 19, "hc": 0, "g": 1.6},
              {"alimento": "Espaguetis (crudos)", "cantidad": "155 g", "kcal": 559.5, "p": 20.1, "hc": 111.6, "g": 2.3},
              {"alimento": "Berenjena", "cantidad": "200 g", "kcal": 50, "p": 2, "hc": 11.4, "g": 0.4},
              {"alimento": "Tomates cherry", "cantidad": "150 g", "kcal": 27, "p": 1.4, "hc": 5.8, "g": 0.3},
              {"alimento": "Queso fresco de vaca", "cantidad": "30 g", "kcal": 50.4, "p": 3.5, "hc": 1.4, "g": 3.4},
              {"alimento": "Aceite de oliva", "cantidad": "17 g", "kcal": 153, "p": 0, "hc": 0, "g": 17}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Pechuga de pavo", "cantidad": "70 g", "kcal": 79.1, "p": 16.7, "hc": 0, "g": 1.4},
              {"alimento": "Espaguetis (crudos)", "cantidad": "130 g", "kcal": 469.3, "p": 16.9, "hc": 93.6, "g": 1.9},
              {"alimento": "Berenjena", "cantidad": "150 g", "kcal": 37.5, "p": 1.5, "hc": 8.6, "g": 0.3},
              {"alimento": "Tomates cherry", "cantidad": "150 g", "kcal": 27, "p": 1.4, "hc": 5.8, "g": 0.3},
              {"alimento": "Queso fresco de vaca", "cantidad": "30 g", "kcal": 50.4, "p": 3.5, "hc": 1.4, "g": 3.4},
              {"alimento": "Aceite de oliva", "cantidad": "18 g", "kcal": 162, "p": 0, "hc": 0, "g": 18}
            ]
          }
        }
      },
      {
        "id": "garbanzos-con-espinacas-y-pavo",
        "nombre": "Garbanzos con espinacas y pavo",
        "color": "#D9EAD3",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Garbanzos cocidos", "cantidad": "200 g", "kcal": 180, "p": 11, "hc": 19, "g": 4.4},
              {"alimento": "Espinacas frescas", "cantidad": "150 g", "kcal": 33, "p": 4.1, "hc": 1.5, "g": 1.2},
              {"alimento": "Ajo", "cantidad": "3 g", "kcal": 4.5, "p": 0.2, "hc": 1, "g": 0},
              {"alimento": "Pechuga de pavo", "cantidad": "60 g", "kcal": 67.8, "p": 14.3, "hc": 0, "g": 1.2},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "130 g", "kcal": 461.5, "p": 11.7, "hc": 101.4, "g": 0.8},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "17 g", "kcal": 153, "p": 0, "hc": 0, "g": 17}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Garbanzos cocidos", "cantidad": "200 g", "kcal": 180, "p": 11, "hc": 19, "g": 4.4},
              {"alimento": "Espinacas frescas", "cantidad": "150 g", "kcal": 33, "p": 4, "hc": 1.5, "g": 1.2},
              {"alimento": "Ajo", "cantidad": "3 g", "kcal": 4.5, "p": 0.2, "hc": 1, "g": 0},
              {"alimento": "Pechuga de pavo", "cantidad": "50 g", "kcal": 56.5, "p": 11.9, "hc": 0, "g": 1},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "105 g", "kcal": 372.8, "p": 9.4, "hc": 81.9, "g": 0.6},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "16 g", "kcal": 144, "p": 0, "hc": 0, "g": 16}
            ]
          }
        }
      }
    ],
    "merienda": [],
    "cena": [
      {
        "id": "hamburguesa",
        "nombre": "Hamburguesa",
        "color": "#E6B8AF",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Carne picada", "cantidad": "100 g", "kcal": 204, "p": 19, "hc": 0.5, "g": 14},
              {"alimento": "Pan Maxi Burger", "cantidad": "60 g", "kcal": 162, "p": 6, "hc": 27, "g": 2.7},
              {"alimento": "Queso Edam", "cantidad": "10 g", "kcal": 32.1, "p": 2.5, "hc": 0, "g": 2.4},
              {"alimento": "Tomates cherry", "cantidad": "50 g", "kcal": 9, "p": 0.5, "hc": 1.95, "g": 0.1},
              {"alimento": "Lechuga", "cantidad": "30 g", "kcal": 4.5, "p": 0.4, "hc": 0.9, "g": 0.06},
              {"alimento": "Kétchup zero", "cantidad": "10 g", "kcal": 8.3, "p": 0.17, "hc": 1.78, "g": 0},
              {"alimento": "Patata (horno)", "cantidad": "400 g", "kcal": 308, "p": 8, "hc": 68, "g": 0.4},
              {"alimento": "Aceite oliva (para patata)", "cantidad": "5 g", "kcal": 45, "p": 0, "hc": 0, "g": 5}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Carne picada", "cantidad": "90 g", "kcal": 183.6, "p": 17.1, "hc": 0.45, "g": 12.6},
              {"alimento": "Pan Maxi Burger", "cantidad": "50 g", "kcal": 135, "p": 5, "hc": 22.5, "g": 2.25},
              {"alimento": "Queso Edam", "cantidad": "10 g", "kcal": 32.1, "p": 2.5, "hc": 0, "g": 2.4},
              {"alimento": "Tomates cherry", "cantidad": "50 g", "kcal": 9, "p": 0.5, "hc": 1.95, "g": 0.1},
              {"alimento": "Lechuga", "cantidad": "30 g", "kcal": 4.5, "p": 0.4, "hc": 0.9, "g": 0.06},
              {"alimento": "Kétchup zero", "cantidad": "10 g", "kcal": 8.3, "p": 0.17, "hc": 1.78, "g": 0},
              {"alimento": "Patata (horno)", "cantidad": "325 g", "kcal": 231, "p": 6, "hc": 51, "g": 0.3},
              {"alimento": "Aceite oliva (para patata)", "cantidad": "5 g", "kcal": 45, "p": 0, "hc": 0, "g": 5}
            ]
          }
        }
      },
      {
        "id": "alitas-de-pollo",
        "nombre": "Alitas de pollo",
        "color": "#FFF2CC",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Alitas de pollo", "cantidad": "87 g", "kcal": 139.2, "p": 15.6, "hc": 0.3, "g": 8.5},
              {"alimento": "Patata (horno)", "cantidad": "300 g", "kcal": 231, "p": 6, "hc": 51, "g": 0.3},
              {"alimento": "Cebolla", "cantidad": "100 g", "kcal": 40, "p": 1.1, "hc": 9.3, "g": 0.1},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "50 g", "kcal": 177.5, "p": 4.5, "hc": 39, "g": 0.3},
              {"alimento": "Aceite de oliva", "cantidad": "9 g", "kcal": 81, "p": 0, "hc": 0, "g": 9}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Alitas de pollo", "cantidad": "77 g", "kcal": 123.2, "p": 13.8, "hc": 0.3, "g": 7.5},
              {"alimento": "Patata (horno)", "cantidad": "250 g", "kcal": 192.5, "p": 5, "hc": 42.5, "g": 0.25},
              {"alimento": "Cebolla", "cantidad": "100 g", "kcal": 40, "p": 1.1, "hc": 9.3, "g": 0.1},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "40 g", "kcal": 142, "p": 3.6, "hc": 31.2, "g": 0.2},
              {"alimento": "Aceite de oliva", "cantidad": "11 g", "kcal": 99, "p": 0, "hc": 0, "g": 11}
            ]
          }
        }
      },
      {
        "id": "ensalada-de-garbanzos",
        "nombre": "Ensalada de garbanzos",
        "color": "#D7E7F5",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Atún (escurrido)", "cantidad": "40 g", "kcal": 98, "p": 8.4, "hc": 0.4, "g": 7.2},
              {"alimento": "Garbanzos cocidos", "cantidad": "175 g", "kcal": 157.5, "p": 9.6, "hc": 16.6, "g": 3.9},
              {"alimento": "Queso fresco de vaca", "cantidad": "30 g", "kcal": 50.4, "p": 3.5, "hc": 1.4, "g": 3.4},
              {"alimento": "Tomate natural", "cantidad": "300 g", "kcal": 54, "p": 2.7, "hc": 11.7, "g": 0.6},
              {"alimento": "Arroz basmati (seco)", "cantidad": "90 g", "kcal": 319.5, "p": 8.1, "hc": 70.2, "g": 0.5},
              {"alimento": "Aceite oliva (crudo)", "cantidad": "6 g", "kcal": 54, "p": 0, "hc": 0, "g": 6}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Atún (escurrido)", "cantidad": "35 g", "kcal": 85.8, "p": 7.3, "hc": 0.3, "g": 6.3},
              {"alimento": "Garbanzos cocidos", "cantidad": "100 g", "kcal": 90, "p": 5.5, "hc": 9.5, "g": 2.2},
              {"alimento": "Queso fresco de vaca", "cantidad": "45 g", "kcal": 75.6, "p": 5.3, "hc": 2, "g": 5.1},
              {"alimento": "Tomate natural", "cantidad": "300 g", "kcal": 54, "p": 2.7, "hc": 11.7, "g": 0.6},
              {"alimento": "Arroz basmati (seco)", "cantidad": "75 g", "kcal": 266.2, "p": 6.8, "hc": 58.5, "g": 0.5},
              {"alimento": "Aceite oliva (crudo)", "cantidad": "7 g", "kcal": 63, "p": 0, "hc": 0, "g": 7}
            ]
          }
        }
      },
      {
        "id": "ensalada-de-pasta",
        "nombre": "Ensalada de pasta",
        "color": "#FFE9FD",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Pasta tricolor (cruda)", "cantidad": "110 g", "kcal": 398.2, "p": 14.3, "hc": 79.2, "g": 1.6},
              {"alimento": "Atún escurrido", "cantidad": "40 g", "kcal": 98, "p": 8.4, "hc": 0.4, "g": 7.2},
              {"alimento": "Huevo cocido", "cantidad": "1 ud (60 g)", "kcal": 79.8, "p": 7.3, "hc": 0.3, "g": 5.5},
              {"alimento": "Cherries", "cantidad": "200 g", "kcal": 36, "p": 1.8, "hc": 7.8, "g": 0.4},
              {"alimento": "Zanahoria", "cantidad": "150 g", "kcal": 60, "p": 1.2, "hc": 13.9, "g": 0.3},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "6 g", "kcal": 54, "p": 0, "hc": 0, "g": 6}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Pasta tricolor (cruda)", "cantidad": "85 g", "kcal": 307.7, "p": 11.1, "hc": 61.2, "g": 1.3},
              {"alimento": "Atún escurrido", "cantidad": "30 g", "kcal": 73.5, "p": 6.3, "hc": 0.3, "g": 5.4},
              {"alimento": "Huevo cocido", "cantidad": "1 ud (60 g)", "kcal": 79.8, "p": 7.3, "hc": 0.3, "g": 5.5},
              {"alimento": "Cherries", "cantidad": "200 g", "kcal": 36, "p": 1.8, "hc": 7.8, "g": 0.4},
              {"alimento": "Zanahoria", "cantidad": "120 g", "kcal": 48, "p": 1, "hc": 11.2, "g": 0.2},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "9 g", "kcal": 81, "p": 0, "hc": 0, "g": 9}
            ]
          }
        }
      },
      {
        "id": "pechuga-rellena",
        "nombre": "Pechuga rellena",
        "color": "#D9D2E9",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Pechuga de pollo", "cantidad": "80 g", "kcal": 84.8, "p": 17.6, "hc": 0, "g": 1.4},
              {"alimento": "Queso fresco de vaca", "cantidad": "40 g", "kcal": 67.2, "p": 4.7, "hc": 1.8, "g": 4.6},
              {"alimento": "Pasta tricolor (cruda)", "cantidad": "110 g", "kcal": 398.2, "p": 14.3, "hc": 79.2, "g": 1.6},
              {"alimento": "Tomate natural", "cantidad": "200 g", "kcal": 36, "p": 1.8, "hc": 7.8, "g": 0.4},
              {"alimento": "Cebolla", "cantidad": "100 g", "kcal": 40, "p": 1.1, "hc": 9.3, "g": 0.1},
              {"alimento": "Aceite de oliva", "cantidad": "12 g", "kcal": 108, "p": 0, "hc": 0, "g": 12}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Pechuga de pollo", "cantidad": "70 g", "kcal": 74.2, "p": 15.4, "hc": 0, "g": 1.3},
              {"alimento": "Queso fresco de vaca", "cantidad": "40 g", "kcal": 67.2, "p": 4.7, "hc": 1.8, "g": 4.6},
              {"alimento": "Pasta tricolor (cruda)", "cantidad": "85 g", "kcal": 307.7, "p": 11.1, "hc": 61.2, "g": 1.3},
              {"alimento": "Tomate natural", "cantidad": "200 g", "kcal": 36, "p": 1.8, "hc": 7.8, "g": 0.4},
              {"alimento": "Cebolla", "cantidad": "80 g", "kcal": 32, "p": 0.9, "hc": 7.4, "g": 0.1},
              {"alimento": "Aceite de oliva", "cantidad": "13 g", "kcal": 117, "p": 0, "hc": 0, "g": 13}
            ]
          }
        }
      },
      {
        "id": "espaguetis-con-pavo",
        "nombre": "Espaguetis con pavo",
        "color": "#EAD1DC",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Pechuga de pavo", "cantidad": "70 g", "kcal": 79.1, "p": 16.7, "hc": 0, "g": 1.4},
              {"alimento": "Espaguetis (crudos)", "cantidad": "115 g", "kcal": 415.1, "p": 14.9, "hc": 82.8, "g": 1.7},
              {"alimento": "Berenjena", "cantidad": "200 g", "kcal": 50, "p": 2, "hc": 11.4, "g": 0.4},
              {"alimento": "Tomates cherry", "cantidad": "150 g", "kcal": 27, "p": 1.4, "hc": 5.8, "g": 0.3},
              {"alimento": "Queso fresco de vaca", "cantidad": "30 g", "kcal": 50.4, "p": 3.5, "hc": 1.4, "g": 3.4},
              {"alimento": "Aceite de oliva", "cantidad": "14 g", "kcal": 126, "p": 0, "hc": 0, "g": 14}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Pechuga de pavo", "cantidad": "60 g", "kcal": 67.8, "p": 14.3, "hc": 0, "g": 1.2},
              {"alimento": "Espaguetis (crudos)", "cantidad": "95 g", "kcal": 342.9, "p": 12.3, "hc": 68.4, "g": 1.4},
              {"alimento": "Berenjena", "cantidad": "150 g", "kcal": 37.5, "p": 1.5, "hc": 8.6, "g": 0.3},
              {"alimento": "Tomates cherry", "cantidad": "150 g", "kcal": 27, "p": 1.4, "hc": 5.8, "g": 0.3},
              {"alimento": "Queso fresco de vaca", "cantidad": "30 g", "kcal": 50.4, "p": 3.5, "hc": 1.4, "g": 3.4},
              {"alimento": "Aceite de oliva", "cantidad": "14 g", "kcal": 126, "p": 0, "hc": 0, "g": 14}
            ]
          }
        }
      },
      {
        "id": "garbanzos-con-espinacas-y-pavo",
        "nombre": "Garbanzos con espinacas y pavo",
        "color": "#D9EAD3",
        "personas": {
          "mario": {
            "ingredientes": [
              {"alimento": "Garbanzos cocidos", "cantidad": "200 g", "kcal": 180, "p": 11, "hc": 19, "g": 4.4},
              {"alimento": "Espinacas frescas", "cantidad": "150 g", "kcal": 33, "p": 4, "hc": 1.5, "g": 1.2},
              {"alimento": "Ajo", "cantidad": "3 g", "kcal": 4.5, "p": 0.2, "hc": 1, "g": 0},
              {"alimento": "Pechuga de pavo", "cantidad": "50 g", "kcal": 56.5, "p": 11.9, "hc": 0, "g": 1},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "95 g", "kcal": 337.2, "p": 8.6, "hc": 74.1, "g": 0.6},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "13 g", "kcal": 117, "p": 0, "hc": 0, "g": 13}
            ]
          },
          "alba": {
            "ingredientes": [
              {"alimento": "Garbanzos cocidos", "cantidad": "200 g", "kcal": 180, "p": 11, "hc": 19, "g": 4.4},
              {"alimento": "Espinacas frescas", "cantidad": "150 g", "kcal": 33, "p": 4.1, "hc": 1.5, "g": 1.2},
              {"alimento": "Ajo", "cantidad": "3 g", "kcal": 4.5, "p": 0.2, "hc": 1, "g": 0},
              {"alimento": "Pechuga de pavo", "cantidad": "40 g", "kcal": 45.2, "p": 9.5, "hc": 0, "g": 0.8},
              {"alimento": "Arroz basmati (crudo)", "cantidad": "70 g", "kcal": 248.5, "p": 6.3, "hc": 54.6, "g": 0.4},
              {"alimento": "Aceite de oliva (crudo)", "cantidad": "14 g", "kcal": 126, "p": 0, "hc": 0, "g": 14}
            ]
          }
        }
      }
    ]
  },
  "menu": {
    "semanas": [
      {
        "nombre": "Semana 1",
        "dias": [
          {
            "dia": "Lunes",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "macarrones"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "ensalada-de-garbanzos"}
          },
          {
            "dia": "Martes",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "garbanzos-con-espinacas-y-pavo"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "ensalada-de-pasta"}
          },
          {
            "dia": "Miércoles",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "salmon"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "pechuga-rellena"}
          },
          {
            "dia": "Jueves",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "arroz-y-lentejas"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "alitas-de-pollo"}
          },
          {
            "dia": "Viernes",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "macarrones"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "garbanzos-con-espinacas-y-pavo"}
          },
          {
            "dia": "Sábado",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "lomo-con-calabacin"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "hamburguesa"}
          },
          {
            "dia": "Domingo",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "espaguetis-con-pavo"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "alitas-de-pollo"}
          }
        ]
      },
      {
        "nombre": "Semana 2",
        "dias": [
          {
            "dia": "Lunes",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "ensalada-de-garbanzos"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "pechuga-rellena"}
          },
          {
            "dia": "Martes",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "arroz-y-lentejas"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "ensalada-de-pasta"}
          },
          {
            "dia": "Miércoles",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "lomo-con-calabacin"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "hamburguesa"}
          },
          {
            "dia": "Jueves",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "salmon"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "alitas-de-pollo"}
          },
          {
            "dia": "Viernes",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "macarrones"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "garbanzos-con-espinacas-y-pavo"}
          },
          {
            "dia": "Sábado",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "lomo-con-calabacin"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "hamburguesa"}
          },
          {
            "dia": "Domingo",
            "desayuno": {"receta": "tortilla-con-tostadas-y-jamon"},
            "almuerzo": {"receta": "proteina-con-fruta"},
            "comida": {"receta": "arroz-y-lentejas"},
            "merienda": {"texto": "Yogur con uvas / Tortitas con crema de cacahuete"},
            "cena": {"receta": "espaguetis-con-pavo"}
          }
        ]
      }
    ]
  }
};
