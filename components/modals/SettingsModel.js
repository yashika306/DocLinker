import { useSettings } from '@/hooks/use-settings';
import React from 'react'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import ModeToggle from '../ModeToggle';

const SettingsModel = () => {
    const settings = useSettings();
  return (
    <Dialog open ={settings.isOpen} onOpenChange={settings.onClose}>
    <DialogContent>
        <DialogHeader className="border-b pb-3">
        <h2 className='text-lg font-medium'>My Settings</h2>
        </DialogHeader>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-y-1'>
                <Label>Appearence</Label>
                <span className='text-[0.8rem] text-muted-foreground'>
                Customise how CloudNote Pro looks on your device
                </span>
            </div>
            <ModeToggle/>
        </div> 
    </DialogContent>
    </Dialog>
  )
}

export default SettingsModel;
