function Interest() {
  const myVideoPath =
    "../media/Nintendo 3DS - Fire Emblem_ Awakening Trailer.mp4";

  return (
    <div className="section">
      <h3>나의 관심 - 게임</h3>

      <h3>
        게임중에서 제일 좋아하는 게임인 파이어엠블렘 각성(한국 미발매)
        영상입니다.
      </h3>

      <embed src={myVideoPath} width="500" height="350"></embed>
    </div>
  );
}

export default Interest;
