// from = from에서 지정한 시작값에서 원상태로 돌아오는 모션
// y축 -100%에서부터 원상태로 돌아오는 모션으로 시작. ease로 여러가지 생동감있는 애니메이션 효과를 줄 수 있음.
// gsap.from('header', { duration: 1, y: '-100%', ease: 'bounce' })

// class명 link들이 opacity 0에서 원상태로 돌아오게 함. 지연시간 1초. stagger로 요소 각각 순차적으로 지연 시간을 줄 수 있음. link가 1초 뒤에 첫번째 요소부터 순서대로 0.5초씩 늦게 나타남.
// gsap.from('.link', { duration: 1, opacity: 0, delay: 1, stagger: .5 })


// gsap.from('.right', { duration: 1, x: '-100vw', delay: 1, ease: 'power2.in' })
// gsap.from('left', { duration: 1, delay: 1.5, x: '-100%' })

// 원상태에서 to에서 지정한 값으로 변하도록 함.
// gsap.to('footer', { duration: 1, y: 0, ease: 'elastic', delay: 2.5 })

// fromTo => 앞의 객체에서 지정한 값으로 시작해서 뒤의 객체에서 지정한 값으로 나타나는 효과.
// gsap.fromTo('.button', { opacity: 0, scale: 0, rotation: 720}, { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 })


// 이 모든 애니메이션이 동시에 동작하면 어지러울 수 있으니, 타임라인을 지정할 수 있다.
// 타임라인으로 순서대로 애니메이션이 동작하게 한다.
// default로 기본 시간을 설정할 수 있다. (duration 속성을 각자 넣어줄 필요 없음.))
const timeline = gsap.timeline({ default: { duration: 1 }})
timeline
  .from('header', { y: '-100%', ease: 'bounce' })

// timeline 자체에서 지연을 시켜주기 때문에 delay 속성값을 넣을 필요 없다.
  .from('.link', { opacity: 0, stagger: .5 })

// 만약 특정요소는 앞의 애니메이션이 순차적으로 완료될 때까지 기다리고싶지 않다면?
// ex) right를 link가 끝나기 전, header가 끝난 후에 동작시키고 싶다면? 
// => 두번째 value값을 넣어준다. 아래의 예시에서는 1을 넣었다.
  .from('.right', { x: '-100vw', ease: 'power2.in' }, 1)

  // 이전 애니메이션이 시작될 때를 참조하려면 캐럿 '<' 를 사용한다.
  // 이전 애니메이션이 시작될 떄와 동시에 작동시킬 수 있다.
  // .from('left', { x: '-100%' }, '<')
  // 만약 이전 애니메이션('.right')이 시작한 후, 0.5초 후에 작동시키고 싶다면?
  .from('.left', { x: '-100%' }, '<.5')

  .to('footer', { y: 0, ease: 'elastic' })

  .fromTo('.button', { opacity: 0, scale: 0, rotation: 720}, { opacity: 1, scale: 1, rotation: 0 })


  // 타임라인을 뒤집으려면? (부메랑처럼 되돌아가게 하기)
  // button 요소를 클릭하면 다시 애니메이션이 역전되도록 하는 코드.
  const button = document.querySelector('.button')

  button.addEventListener('click', () => {
    // 타임라인 배속 (값이 클수록 빠름.) reverse보다 위에 위치해야 한다!!
    timeline.timeScale(3)
    // 타임라인 되감기
    timeline.reverse()
  })