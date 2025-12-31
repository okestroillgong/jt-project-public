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

  // ??λ맂 濡쒓렇???뺣낫 遺덈윭?ㅺ린
  useEffect(() => {
    const savedUserId = localStorage.getItem('savedUserId');
    const savedRemember = localStorage.getItem('rememberLogin');
    if (savedRemember === 'true' && savedUserId) {
      setUserId(savedUserId);
      setRememberLogin(true);
    }

    // ?대? 濡쒓렇?몃맂 ?곹깭硫?梨꾧텒?곷떞?쇰줈 ?대룞
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/counseling/general-counseling/bond-counseling');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId.trim()) {
      alert('?ъ슜???꾩씠?붾? ?낅젰?댁＜?몄슂.');
      return;
    }

    if (!password.trim()) {
      alert('?⑥뒪?뚮뱶瑜??낅젰?댁＜?몄슂.');
      return;
    }

    setIsLoading(true);

    // 濡쒓렇???뺣낫 ???泥섎━
    if (rememberLogin) {
      localStorage.setItem('savedUserId', userId);
      localStorage.setItem('rememberLogin', 'true');
    } else {
      localStorage.removeItem('savedUserId');
      localStorage.removeItem('rememberLogin');
    }

    // 濡쒓렇??泥섎━ (?ㅼ젣 援ы쁽?먯꽌??API ?몄텧)
    // ?곕え?⑹쑝濡?媛꾨떒??泥섎━
    setTimeout(() => {
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('userId', userId);
      setIsLoading(false);

      // 梨꾧텒?곷떞 ??異붽? 諛??대룞
      const bondCounselingPath = '/counseling/general-counseling/bond-counseling';
      addTab({
        id: bondCounselingPath,
        label: '梨꾧텒?곷떞',
        path: bondCounselingPath,
      });
      navigate(bondCounselingPath);
    }, 500);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative"
      style={{
        backgroundImage: 'url(/login/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* 濡쒓렇??諛뺤뒪 而⑦뀒?대꼫 */}
      <div className="flex items-end gap-0">
        {/* 濡쒓렇????諛뺤뒪 */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg px-8 py-12 w-[420px] relative z-10">
          {/* 濡쒓퀬 ?곸뿭 */}
          <div className="flex items-center gap-2 mb-8">
            <img
              src={`${base}login/text-logo.png`}
              alt="JT 移쒖븷?異뺤???
              className="h-6"
            />
            <span className="text-gray-300 text-lg -mt-1">|</span>
            <span className="text-gray-500 text-xl font-medium -mt-1">Jany system</span>
          </div>

          {/* 濡쒓렇????*/}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* ?ъ슜???꾩씠??*/}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ?ъ슜???꾩씠??              </label>
              <Input
                type="text"
                placeholder="?ъ슜???꾩씠?붾? ?낅젰?댁＜?몄슂."
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full h-11"
              />
            </div>

            {/* ?⑥뒪?뚮뱶 */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                ?⑥뒪?뚮뱶
              </label>
              <Input
                type="password"
                placeholder="?⑥뒪?뚮뱶瑜??낅젰?댁＜?몄슂."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11"
              />
            </div>

            {/* 濡쒓렇???뺣낫 ???& ?⑤쭚 IP */}
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
                  濡쒓렇?몄젙蹂????                </label>
              </div>
              <span className="text-sm text-gray-500">
                ?⑤쭚 IP : {clientIP}
              </span>
            </div>

            {/* 濡쒓렇??踰꾪듉 */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 mt-16 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium text-base"
            >
              {isLoading ? '濡쒓렇??以?..' : '濡쒓렇??}
            </Button>
          </form>
        </div>

        {/* ?붿궡??李⑦듃 ?대?吏 */}
        <img
          src={`${base}login/arrow-image.png`}
          alt="?깆옣 李⑦듃"
          className="w-[280px] h-auto -ml-2 mb-4 relative z-0"
        />
      </div>
    </div>
  );
}
