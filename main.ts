let プレイヤー = game.createSprite(2, 2)
let 敵 = game.createSprite(randint(0, 4), randint(0, 4))
let 敵2 = game.createSprite(randint(0, 4), randint(0, 4))
game.setScore(0)
let ゲームオーバー = false
basic.forever(function () {
    if (プレイヤー.isTouching(敵) || プレイヤー.isTouching(敵2)) {
        ゲームオーバー = true
        game.gameOver()
    }
})
basic.forever(function () {
    if (input.rotation(Rotation.Roll) >= 0) {
        プレイヤー.change(LedSpriteProperty.X, 1)
    } else {
        プレイヤー.change(LedSpriteProperty.X, -1)
    }
    if (input.rotation(Rotation.Pitch) >= 0) {
        プレイヤー.change(LedSpriteProperty.Y, 1)
    } else {
        プレイヤー.change(LedSpriteProperty.Y, -1)
    }
    basic.pause(500)
})
basic.forever(function () {
    if (プレイヤー.get(LedSpriteProperty.X) - 敵.get(LedSpriteProperty.X) > 0) {
        敵.change(LedSpriteProperty.X, 1)
    } else if (プレイヤー.get(LedSpriteProperty.X) - 敵.get(LedSpriteProperty.X) < 0) {
        敵.change(LedSpriteProperty.X, -1)
    } else if (プレイヤー.get(LedSpriteProperty.Y) - 敵.get(LedSpriteProperty.Y) > 0) {
        敵.change(LedSpriteProperty.Y, 1)
    } else if (プレイヤー.get(LedSpriteProperty.Y) - 敵.get(LedSpriteProperty.Y) < 0) {
        敵.change(LedSpriteProperty.Y, -1)
    }
    敵2.change(LedSpriteProperty.X, randint(-1, 1))
    敵2.change(LedSpriteProperty.Y, randint(-1, 1))
    if (ゲームオーバー == false) {
        game.setScore(game.score() + 1)
    }
    basic.pause(1000)
})
