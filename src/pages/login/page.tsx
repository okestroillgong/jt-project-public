import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTabStore } from '@/lib/store/tabs';

export default function LoginPage() {
  const base = import.meta.env.BASE_URL;
const navigate = useNavigate();
  const addTab = useTabStore((state) => state.addTab);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberLogin, setRememberLogin] = useState(false);
  const [clientIP, setClientIP] = useState('192.111.111.102');
  const [isLoading, setIsLoading] = useState(false);

  // ???貫留?嚥≪뮄????類ｋ궖 ?븍뜄???븍┛
  useEffect(() => {
    const savedUserId = localStorage.getItem('savedUserId');
    const savedRemember = localStorage.getItem('rememberLogin');
    if (savedRemember === 'true' && savedUserId) {
      setUserId(savedUserId);
      setRememberLogin(true);
    }

    // ??? 嚥≪뮄??紐껊쭆 ?怨밴묶筌?筌?쑨??怨룸뼖??곗쨮 ??猷?    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/counseling/general-counseling/bond-counseling');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      alert('??????袁⑹뵠?遺? ??낆젾??곻폒?紐꾩뒄.');
      return;
    }

    if (!password.trim()) {
      alert('??λ뮞???굡????낆젾??곻폒?紐꾩뒄.');
      return;
    }

    setIsLoading(true);

    // 嚥≪뮄????類ｋ궖 ????筌ｌ꼶??    if (rememberLogin) {
      localStorage.setItem('savedUserId', userId);
      localStorage.setItem('rememberLogin', 'true');
    } else {
      localStorage.removeItem('savedUserId');
      localStorage.removeItem('rememberLogin');
    }

    // 嚥≪뮄???筌ｌ꼶??(??쇱젫 ?닌뗭겱?癒?퐣??API ?紐꾪뀱)
    // ?怨뺛걟??뱀몵嚥?揶쏄쑬???筌ｌ꼶??    setTimeout(() => {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userId', userId);
      setIsLoading(false);

      // 筌?쑨??怨룸뼖 ???곕떽? 獄???猷?      const bondCounselingPath = '/counseling/general-counseling/bond-counseling';
      addTab({
        id: bondCounselingPath,
        label: '筌?쑨??怨룸뼖',
        path: bondCounselingPath,
      });
      navigate(bondCounselingPath);
    }, 500);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(`${base}login/background.png`)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 嚥≪뮄???獄쏅벡???뚢뫂???瑗?*/}
      <div className="flex items-end gap-0">
        {/* 嚥≪뮄?????獄쏅벡??*/}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg px-8 py-12 w-[420px] relative z-10">
          {/* 嚥≪뮄???怨몃열 */}
          <div className="flex items-center gap-2 mb-8">
            <img
              src={`${base}login/text-logo.png`}
              alt="JT 燁살뮇釉???곕벡???
              className="h-6"
            />
            <span className="text-gray-300 text-lg -mt-1">|</span>
            <span className="text-gray-500 text-xl font-medium -mt-1">Jany system</span>
          </div>

          {/* 嚥≪뮄?????*/}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* ??????袁⑹뵠??*/}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ??????袁⑹뵠??              </label>
              <Input
                type="text"
                placeholder="??????袁⑹뵠?遺? ??낆젾??곻폒?紐꾩뒄."
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full h-11"
              />
            </div>

            {/* ??λ뮞???굡 */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ??λ뮞???굡
              </label>
              <Input
                type="password"
                placeholder="??λ뮞???굡????낆젾??곻폒?紐꾩뒄."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11"
              />
            </div>

            {/* 嚥≪뮄????類ｋ궖 ????& ??ㅼ춾 IP */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="rememberLogin"
                  checked={rememberLogin}
                  onCheckedChange={(checked) => setRememberLogin(checked as boolean)}
                />
                <label
                  htmlFor="rememberLogin"
                  className="text-sm font-semibold text-gray-600 cursor-pointer"
                >
                  嚥≪뮄??紐꾩젟癰?????                </label>
              </div>
              <span className="text-sm text-gray-500">
                ??ㅼ춾 IP : {clientIP}
              </span>
            </div>

            {/* 嚥≪뮄???甕곌쑵??*/}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 mt-16 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium text-base"
            >
              {isLoading ? '嚥≪뮄???餓?..' : '嚥≪뮄???}
            </Button>
          </form>
        </div>

        {/* ?遺욧땀??筌△뫂?????筌왖 */}
        <img
          src={`${base}login/arrow-image.png`}
          alt="?源놁삢 筌△뫂??
          className="w-[280px] h-auto -ml-2 mb-4 relative z-0"
        />
      </div>
    </div>
  );
}
