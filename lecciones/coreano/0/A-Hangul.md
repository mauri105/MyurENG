# Coreano: Leer Hangul

**Hangul** es el sistema de escritura del idioma coreano. Al igual que el español, por lo general, se lee como se escribe (habiendo excepciones).

A continuación las tablas de [Romanización Revisada del Coreano](https://es.wikipedia.org/wiki/Romanizaci%C3%B3n_revisada_del_coreano) del artículo de Wikipedia.

## Vocales

| Hangul | ㅏ | ㅐ | ㅑ | ㅒ | ㅓ | ㅔ | ㅕ | ㅖ | ㅗ | ㅘ | ㅙ | ㅚ | ㅛ | ㅜ | ㅝ | ㅞ | ㅟ | ㅠ | ㅡ | ㅢ | ㅣ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Romanización** | *a* | *ae* | *ya* | *yae* | *eo* | *e* | *yeo* | *ye* | *o* | *wa* | *wae* | *oe* | *yo* | *u* | *wo* | *we* | *wi* | *yu* | *eu* | *ui* | *i* |

## Consonantes

| Hangul | ㄱ | ㄲ | ㄴ | ㄷ | ㄸ | ㄹ | ㅁ | ㅂ | ㅃ | ㅅ | ㅆ | ㅇ | ㅈ | ㅉ | ㅊ | ㅋ | ㅌ | ㅍ | ㅎ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Inicial** | *g* | *kk* | *n* | *d* | *tt* | *r* | *m* | *b* | *pp* | *s* | *ss* | – | *j* | *jj* | *ch* | *k* | *t* | *p* | *h* |
| **Final** | *k* | *k* | *n* | *t* | – | *l* | *m* | *p* | – | *t* | *t* | *ng* | *t* | – | *t* | *k* | *t* | *p* | *t* |

## 1. Verbos Irregulares
A diferencia de los verbos regulares que terminan en *-ed*, los verbos irregulares cambian su estructura completa. 

Pasa el cursor sobre las palabras o tócalas para ver su traducción individual:

```sentence
{
  "fullTranslation": "Ayer compré dos libros interesantes en la tienda.",
  "tokens": [
    { "text": "Yesterday", "trans": "Ayer", "type": "adv" },
    { "text": "I", "trans": "yo", "type": "pron" },
    { "text": "bought", "trans": "compré", "type": "verb" },
    { "text": "two", "trans": "dos", "type": "num" },
    { "text": "interesting books", "trans": "libros interesantes", "type": "noun" },
    { "text": "at the store.", "trans": "en la tienda.", "type": "prep" }
  ]
}
```

> **Nota gramatical:** El verbo *bought* proviene del infinitivo *to buy*. En oraciones afirmativas en pasado simple nunca usamos el auxiliar *did*.

## 2. Forma Negativa
Para formar oraciones negativas usamos el auxiliar **did not** (o la contracción **didn't**) y el verbo regresa a su forma base:

```sentence
{
  "fullTranslation": "Ella no vio esa película la semana pasada.",
  "tokens": [
    { "text": "She", "trans": "Ella", "type": "pron" },
    { "text": "didn't see", "trans": "no vio", "type": "verb" },
    { "text": "that movie", "trans": "esa película", "type": "noun" },
    { "text": "last week.", "trans": "la semana pasada.", "type": "adv" }
  ]
}
```
