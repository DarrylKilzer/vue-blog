var state = {
  blogs:[{
    name: 'Coolest Blog Ever',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perferendis accusamus, amet rem nostrum velit eos, quod magni odit ipsa. Sit corporis vel velit molestias ratione eveniet enim vero, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perferendis accusamus, amet rem nostrum velit eos, quod magni odit ipsa. Sit corporis vel velit molestias ratione eveniet enim vero, cum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae perferendis accusamus, amet rem nostrum velit eos, quod magni odit ipsa. Sit corporis vel velit molestias ratione eveniet enim vero, cum.'
  },
  {
    name: 'Das Blog ist SUPA',
    body: 'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von Buchstaben darstellt und somit nach lesbarer Sprache aussieht. Viele Desktop Publisher und Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst beeinflusst von Witz und des eigenen Geschmacks'
  }]
}

let store = {
  getBlogs(){
    return state.blogs
  }
}

export {store}