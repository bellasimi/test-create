describe('카운터 페이지 테스트', () => {
  beforeEach(() => {
    //현재 describe로 grouping된 테스트가 실행되기 전에 실행되는 코드
    cy.visit('http://localhost:3000')
  })

  it('/ url로 진입하면 counter가 0으로 표시됨', () => {
    //dataset=counter인 요소를 찾아서 0인지 확인
    cy.getByCy('counter').contains('0')
  })

  it('+ 버튼을 클릭하면 counter가 1 증가함', () => {
    cy.getByCy('plus-button').click()
    cy.getByCy('counter').contains('1')
  })

  it('- 버튼을 클릭하면 counter가 1 감소함', () => {
    cy.getByCy('minus-button').click()
    cy.getByCy('counter').contains('-1')
  })
})
