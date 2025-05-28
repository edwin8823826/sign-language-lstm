let video;
let lstmmodel;

async function setup() {
  createCanvas(640, 480);

  // 啟用鏡頭
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  // 載入模型
  lstmmodel = await tf.loadLayersModel('model1_tfjs/model.json');
  console.log('✅ 模型載入完成');

  // 測試假資料
  let testInput = tf.zeros([1, 30, 258]); // 確保 shape 正確
  let result = lstmmodel.predict(testInput);
  result.print(); // 可印出張量資訊
  result.array().then(arr => console.log("模型預測結果：", arr));
}

function draw() {
  background(220);
  image(video, 0, 0);

  if (!lstmmodel) {
    textSize(24);
    fill(0);
    text('載入中...', width / 2 - 50, height / 2);
    return;
  }

  // 這裡可加入 MediaPipe 特徵擷取後用 model.predict()
}
