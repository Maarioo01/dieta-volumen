# Dieta de volumen

App para el móvil con la dieta de volumen de Mario y Alba: el menú de lunes a domingo, las kcal de cada día y todas las recetas con sus cantidades y macros.

**Abrir la app:** https://maarioo01.github.io/dieta-volumen/

## Qué tiene

- **Menú**: semana 1 y semana 2 del Excel. Arriba sale el día de hoy (o el que toques) con desayuno, almuerzo, comida, merienda y cena, sus kcal y una etiqueta con el total del día frente a tu objetivo. Debajo, la semana entera con el color de cada plato, y tu tabla de objetivos de macros.
- **Desayunos, Almuerzos, Comidas, Meriendas y Cenas**: cada receta con las cantidades de cada ingrediente, sus kcal y macros, y si encaja en el objetivo de esa toma. Comidas y cenas van separadas (la misma receta lleva cantidades distintas en cada una).
- Selector **Mario / Alba** arriba del todo.
- Modo claro y oscuro, y funciona sin conexión. En el iPhone: Safari → Compartir → *Añadir a pantalla de inicio*.

## De dónde salen los datos

Todo viene de `DIETA-VOLUMEN.xlsx` (la pestaña de registro nutricional no se usa) y está en `data.js`.

- Las kcal y macros de comidas y cenas son la suma de los ingredientes; las de desayunos y almuerzos, el total que pone el Excel.
- Las meriendas están vacías por ahora: la del menú aparece como «sin datos» y no suma en las kcal del día.
- El objetivo diario en kcal se calcula con tus macros diarios (4 kcal/g de proteína e hidratos, 9 kcal/g de grasa).

Para actualizar la app con una versión nueva del Excel:

```bash
pip install openpyxl
python3 scripts/excel_a_datos.py DIETA-VOLUMEN.xlsx > data.js
```

Los nombres de los platos y cómo se enlazan con el texto de la pestaña MENU están al principio del script (`NOMBRES` y `ALIAS`).
