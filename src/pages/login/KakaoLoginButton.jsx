import { requestKakaoLogin } from "../../api/requestKakaoLogin";

export default function KakaoLoginButton() {
  return (
    <button
      type="button"
      onClick={requestKakaoLogin}
      className="w-full flex px-4 py-2 items-center justify-center text-text-primary bg-[#fee500] rounded-md hover:bg-yellow-400" // 색상 변경
    >
      <div className="w-6 h-6 mr-3">
        <img src="/images/kakaoLoginButton.svg" />
      </div>
      <div className="text-center text-black text-[15px] font-['Apple SD Gothic Neo'] leading-snug">
        카카오톡으로 로그인
      </div>
    </button>
  );
}
