export interface InstalledApplicationList {
    udid: string;
}

export interface DeviceLocation {
    udid: string;
}

export interface DeviceInformation {
    udid: string;
    queries: string[] // TODO: need better type of queries
}
export interface disableLostMode {
    udid: string;
}
export interface PlayLostModeSound {
    udid: string;
}
export interface ActivationLockBypassCode {
    udid: string;
}
export interface AvailableOSUpdates {
    udid: string;
}
export interface CertificateList {
    udid: string;
}
export interface DeviceConfigured {
    udid: string;
}
export interface DisableRemoteDesktop {
    udid: string;
}
export interface EnableRemoteDesktop {
    udid: string;
}
export interface OSUpdateStatus {
    udid: string;
}
export interface ProfileList {
    udid: string;
}
export interface SecurityInfo {
    udid: string;
}
export interface RestartDevice {
    udid: string;
}
export interface ProvisioningProfileList {
    udid: string;
}
export interface DeviceLock {
    udid: string;
    pin: string;
}
export interface EraseDevice {
    udid: string;
    pin: string;
}
export interface RefreshCellularPlans {
    udid: string;
    esim_server_url: string;
}
export interface RemoveProfile {
    udid: string;
    identifier: string;
}
export interface RemoveProvisioningProfile {
    udid: string;
    uuid: string;
}
export interface InstallApplication {
    udid: string;
    manifest_url?: string;
    identifier?: string;

}
export interface InstallEnterpriseApplication {
    udid: string;
    manifest_url: string;
}
export interface InstallEnterpriseApplication {
    udid: string;
    manifest_url: string;
}
export interface AccountConfiguration {
    udid: string;
    username: string;
    fullname: string;
}
export interface ScheduleOSUpdate {
    udid: string;
    product_key: string;
    install_action: string;
}
export interface EnableLostMode {
    udid: string;
    foot_note: string;
    message: string;
    phone_number: string;
}
export interface ScheduleOSUpdateScan {
    udid: string;
    force: boolean;
}
export interface install_profile {
    udid: string;
    payload: string;
}
export interface InstallProvisioningProfile {
    udid: string;
    payload: string;
}
export interface SetFirmwarePassword {
    udid: string;
    current_password: string;
    new_password: string;
    request_requires_network_tether: string;
    allow_oroms: string;
}
export interface SetRecoveryLock {
    udid: string;
    current_password: string;
    new_password: string;
    request_requires_network_tether: string;
    allow_oroms: string;
}
export interface VerifyFirmwarePassword {
    udid: string;
    password: string;
    request_requires_network_tether: string;
    allow_oroms: string;
}
export interface VerifyRecoveryLock {
    udid: string;
    password: string;
    request_requires_network_tether: string;
    allow_oroms: string;
}
//TODO:  payload type must be changed
export interface Settings {
    udid: string;
    identifier: string;
    payload: any;
}