controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . 2 2 2 5 5 2 2 2 . . . . 
        . . . 2 2 5 5 5 5 5 5 2 2 . . . 
        . . . 2 4 4 4 5 5 4 4 4 2 . . . 
        . . . 2 4 4 5 5 5 5 4 4 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . 2 2 4 4 4 4 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -50)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy_ship.destroy(effects.fountain, 500)
})
let enemy_ship: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 . . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . . 3 3 . . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    . . . . . . 3 3 3 3 3 3 . . . . 
    . . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . 3 3 3 3 3 3 3 3 3 3 . . 
    . . . . 3 3 3 . . . . 3 3 3 . . 
    . . . . . 3 . . . . . . 3 . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    enemy_ship = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 9 9 . . . . . . 
        . . . . . . . 9 9 9 9 . . . . . 
        . . . . . . 9 9 6 6 9 . . . . . 
        . . . . . . 9 9 6 6 9 9 . . . . 
        . . . . . 8 6 6 6 6 6 6 8 . . . 
        . . . . 8 8 6 6 6 6 6 6 8 8 . . 
        . . . 8 8 6 6 6 6 6 6 6 6 8 8 . 
        . . . 8 8 8 8 8 8 8 8 6 6 8 8 . 
        . . . . 8 8 8 8 . . 8 8 8 8 . . 
        . . . . . 8 8 . . . . 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy_ship.setPosition(randint(0, scene.screenWidth()), 0)
    enemy_ship.setVelocity(0, 50)
    mySprite.setVelocity(0, 50)
})
