import { useState, useEffect } from "react"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"
import { homeMenus } from '@/routers'

const SideMenu = () => {
  const navigate = useNavigate()
  const [menuItems, setMenuItems] = useState<any[]>([])
  const [curKey, setCurKey] = useState()
  useEffect(() => {
    const menus = initMenus(homeMenus)
    setMenuItems(menus)
  }, [])
  const initMenus = (data: any[]) => {
    const menus = data.filter((m: any) => !m.hideInMenu).map((v: any) => {
      const newMenus: any = {
        label: v.label,
        key: v.path,
      }
      if (v.children?.length) {
        newMenus.children = initMenus(v.children)
      }
      return newMenus
    })
    return menus
  }
  const handleMenuClick = (e: any) => {
    const { keyPath, key } = e
    if (key === curKey) return
    setCurKey(key)
    const path = keyPath.reverse().join('/')
    navigate(path)
  }

  return <Menu
    onClick={handleMenuClick}
    style={{ width: 256 }}
    mode="inline"
    items={menuItems}
  />
}
export default SideMenu